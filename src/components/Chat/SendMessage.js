import React, { useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

const StyledSendMessage = styled.div`
  border-top: 1px solid #e0e0e0;

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }

  .input {
    color: inherit;
    background: none;
    outline: none;
    border: none;
    flex: 1;
    font-size: 1rem;
  }

  button {
    background: #4fad65;
    border: none;
    width: 4rem;
    height: 100%;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: ease-out 0.1s;

    &:hover {
      background: #1e3f1f;
      transition: ease-in 0.1s;
    }
  }
`;

const iconStyles = {
  color: 'white',
};

const SendMessageForm = ({ onSubmit, onChange, currentRoom }) => {
  const [text, setText] = useState('');

  const onSubmission = e => {
    e.preventDefault();

    if (currentRoom) onSubmit(text);

    setText('');
  };

  const onChangeHandle = e => {
    setText(e.target.value);
    if (onChange && currentRoom) {
      onChange();
    }
  };
  return (
    <StyledSendMessage className='formDiv'>
      <form onSubmit={onSubmission} className='form'>
        <input
          type='text'
          placeholder='Type your message...'
          onChange={onChangeHandle}
          value={text}
          className='input'
        />
        <button onClick={onSubmission}>
          <SendIcon style={iconStyles} />
        </button>
      </form>
    </StyledSendMessage>
  );
};

export default SendMessageForm;
