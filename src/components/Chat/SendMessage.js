import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSendMessage = styled.div`
  padding: 20;
  border-top: 1px #4c758f solid;
  margin-bottom: 20;

  .form {
    display: flex;
  }

  .input {
    color: inherit;
    background: none;
    outline: none;
    border: none;
    flex: 1;
    font-size: 16;
  }
`;

class SendMessageForm extends Component {
  state = {
    text: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  };

  onChange = e => {
    this.setState({ text: e.target.value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  };

  render() {
    return (
      <StyledSendMessage>
        <div>
          <form onSubmit={this.onSubmit} className='form'>
            <input
              type='text'
              placeholder='Type a message here then hit ENTER'
              onChange={this.onChange}
              value={this.state.text}
              className='input'
            />
          </form>
        </div>
      </StyledSendMessage>
    );
  }
}

export default SendMessageForm;
