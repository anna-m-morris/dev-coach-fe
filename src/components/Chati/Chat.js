import React, { useState  } from 'react';
import { withChatkitOneToOne } from '@pusher/chatkit-client-react';

import './Chat.css';

function Chat(props) {
  const [pendingMessage, setPendingMessage] = useState('');

  const handleMessageChange = event => {
    setPendingMessage(event.target.value);
    handleSendMessage();
  };

  const handleSendMessage = () => {
    if (pendingMessage === '') {
      return;
    }

    props.chatkit.sendSimpleMessage({ text: pendingMessage });
  };

  const messages = props.chatkit.messages.map(m => ({
    id: m.id,
    // This will only work with simple messages.
    // To learn more about displaying multi-part messages see
    // https://pusher.com/docs/chatkit/reference/javascript#messages
    textContent: m.parts[0].payload.content,
  }));
  return (
    <div className='Chat'>
      <div className='Chat__messages'>
        {messages && messages.length ? (
          <Message
            textContent={messages[messages.length - 1].textContent}
          />
        ) : null}
      </div>
      <div className='Chat__compose'>
        <input
          className='Chat__compose__input'
          type='text'
          placeholder='Type a message...'
          value={pendingMessage}
          onChange={handleMessageChange}
        />
        <button
          className='Chat__compose__button'
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

function Message({ textContent }) {
  return (
    <div>
      <div className='Chat__messages__message__content'>
        {textContent}
      </div>
    </div>
  );
}

export default withChatkitOneToOne(Chat);
