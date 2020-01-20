import React from 'react';
import { connect } from 'connect';
import { getRooms } from '../../state/actions/chatActions';

class Chats extends React.Component {
  componentDidMount = () => {
    this.props.getRooms(user.email);
  };
  render() {
    return <div>

    </div>;
  }
}

const mapStateToProps = state => {
  return {
    rooms: state.chatReducer.rooms,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, { getRooms })(Chats);
