import React, { useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

const StyledSendMessage = styled.div`
  border-top: 1px solid #e0e0e0;

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
  }

  .input {
    color: inherit;
    background: none;
    outline: none;
    border: none;
    flex: 1;
    font-size: 1rem;
    margin: 1rem 0;
  }

  button {
    background: #05728f;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    transition: ease-out 0.1s;

    &:hover {
      background: #078baf;
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
