import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Player, ControlBar } from "video-react";

import Peer from "simple-peer"; // for implementing peer-to-peer communication
import axios from "axios";
import Masonry from "react-masonry-component"; // for rendering video streams in a nice way

import ab2str from "../helpers/arrayBufferToString";

const BASE_URL = "YOUR NGROK HTTPS URL";

class GroupChatScreen extends Component {
  state = {
    is_initialized: false, // controls whether to display the group chat UI or not
    streams: [], // array of video streams to display
    username: "" // username of the user to send the message
  };

  constructor(props) {
    super();
    this.users = []; // the array of users to current user is attempting to connect to
    this.user_channels = []; // the Pusher channels the current user is connected to (except their own) 
    this.peers = []; // the peers the current user is connected to
    this.is_initiator = false; // whether the current user is considered the initiator in the last peer connection
    this.peer_username = null; // the username of the last user the current user connected to
    this.has_own_stream = false; // if the current user has already added their own stream to this.state.streams
  }

  // next: add componentDidMount()
  async componentDidMount() {
    const { navigation } = this.props;
    this.username = navigation.getParam("username");
    this.channel = navigation.getParam("channel");
    this.pusher = navigation.getParam("pusher");
    this.my_channel = navigation.getParam("my_channel");

    try {
      const response_data = await axios.post(`${BASE_URL}/users`, {
        channel: this.channel,
        username: this.username
      });

      this.users = response_data.data.users;
      if (this.users.length) {
        this._initializePeerConnection(this.users[0]);
      }
    } catch (err) {
      console.log("error getting users: ", err);
    }

    // next: listen for client-initiate-signaling event
    // (3) user A receives event (client-initiate-signaling) from user B and setups peer connection
    this.my_channel.bind("client-initiate-signaling", data => {

      this.is_initiator = true; // whoever receives the client-initiate-signaling is the initiator
      this._createPeer(data.username); // create new peer instance

      this.initiator_channel = this.pusher.subscribe(
        `private-user-${data.username}`
      );

      this.initiator_channel.bind("pusher:subscription_error", () => {
        console.log(`error subscribing to signaling user ${data.username}`);
      });

      this.initiator_channel.bind("pusher:subscription_succeeded", () => {
        setTimeout(() => {
          if (this.signal) {
            // (5) user A triggers event (client-peer-data) containing their signal to user B
            this.initiator_channel.trigger("client-peer-data", {
              username: this.username,
              peer_data: this.signal
            });
          } else {
            console.log("There's no signal");
          }
        }, 5000);
      });
    });

    // next: add client-peer-data listener
     // (6) user B receives the event (client-peer-data)
     this.my_channel.bind("client-peer-data", data => {
      const user = this.peers.find(item => {
        return item.username === data.username;
      });
      if (user && data) {
        // (7) user B throws back the signal to user A via peer signaling (peer.signal)
        // OR
        // (10) user A receives the event (client-peer-data) and throws back the signal to user B via peer signaling (peer.signal)
        console.log("now sending data via peer signaling: ", data);
        user.peer.signal(JSON.parse(data.peer_data));
      } else {
        console.log("cant find user / no data");
      }
    });

    this.setState({
      is_initialized: true
    });
  }

  // last: add _initializePeerConnection function
  _initializePeerConnection = username => {
    const channel = this.pusher.subscribe(`private-user-${username}`);
    this.user_channels.push({
      username,
      channel
    });

    channel.bind("pusher:subscription_error", status => {
      console.log("error subscribing to peer channel: ", status);
    });

    channel.bind("pusher:subscription_succeeded", () => {
      // (1) user B setups peer connection (non initiator)
      this.is_initiator = false;
      this._createPeer(username); // this is always the non-initiator
      this.peer_username = username; // so we know who's the last user we're creating the peer connection for

      // (2) user B triggers event (client-initiate-signaling) to user A
      setTimeout(() => {
        // inform the remote peer that we’re trying to initiate a peer connection
        channel.trigger("client-initiate-signaling", {
          username: this.username
        });
      }, 5000);
    });
  };

  // next: add _createPeer function
  _createPeer = username => {
    navigator.getUserMedia(
      { video: true, audio: true },
      stream => {
        const video_stream = window.URL.createObjectURL(stream);

        if (!this.has_own_stream) { // if the user hasn't already added their own video stream
          this.setState(prevState => ({
            streams: [...prevState.streams, video_stream]
          }));
          this.has_own_stream = true;
        }

        console.log(`${this.username} is connecting to remote peer...`);
        this._connectToPeer(username, stream);
      },
      err => {
        console.log("error occured getting media: ", err);
      }
    );
  };
  _connectToPeer = (username, stream = false) => {
    const peer_options = {
      initiator: this.is_initiator,
      trickle: false
    };

    if (stream) {
      peer_options.stream = stream;
    }

    const p = new Peer(peer_options);

    this.peers.push({
      username: username,
      peer: p
    });

    p.on("error", err => {
      console.log("peer error: ", err);
    });

    // next: add p.on("signal")
    p.on("signal", data => {
      if (this.is_initiator && data) { // initiator (User A) receives their peer data
        // (4) user A receives signal
        this.signal = JSON.stringify(data);
      } else { // non-initiator (User B) receives peer data from User A 
        // (8) user B generates an answer
        const peer = this.user_channels.find(ch => {
          return ch.username === this.peer_username;
        });
        if (peer) {
          // (9) user B triggers event (client-peer-data) containing the answer to user A
          peer.channel.trigger("client-peer-data", {
            username: this.username,
            peer_data: JSON.stringify(data)
          });
        }
      }
    });

    // next: add p.on("connect")
    p.on("connect", () => {
      console.log(`(10) ${this.username} is connected`);

      this.users.shift(); // remove the first user in the users array since we're already done connecting to them

      if (this.users.length) {
        this._initializePeerConnection(this.users[0]);
      }
    });
    // next: add p.on("stream")
    p.on("stream", stream => {
      console.log(`${this.username} received stream`);
      const peer_video_stream = window.URL.createObjectURL(stream);

      this.setState(prevState => ({
        streams: [...prevState.streams, peer_video_stream]
      }));
    });
    // next: add p.on("data")
    p.on("data", data => {
      console.log(ab2str(data));
    });

  };
  render() {
    return (
      <Container fluid={true}>
        <Row className="Header justify-content-md-center">
          <Col md="4">
            <h3>{this.channel}</h3>
          </Col>
        </Row>

        {!this.state.is_initialized && <div className="loader">Loading...</div>}

        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.onTypeText}
            />

            <Button variant="primary" type="button" onClick={this._sendMessage}>
              Send Message
            </Button>
          </Col>
        </Row>

        {this.state.is_initialized && (
          <Row>
            <Col md={8} className="VideoContainer">
              <Masonry
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
              >
                {this._renderStreams()}
              </Masonry>
            </Col>
          </Row>
        )}
      </Container>
    );
  }

}
// next: add _renderStreams function
_renderStreams = () => {
  return this.state.streams.map((video) => {
    return (
      <div className="VideoBox">
        <Player autoPlay={true} src={video}>
          <ControlBar autoHide={false} disableDefaultControls />
        </Player>
      </div>
    );
  });
};

// next: add onTypeText and _sendMessage function
onTypeText = evt => {
  this.setState({
    username: evt.target.value
  });
};

_sendMessage = () => {
  const user = this.peers.find(item => {
    return item.username === this.state.username;
  });
  if (user) {
    user.peer.send(`you received a message from ${this.username}`);
  }
};