import React, { useState } from 'react';
import { withChatkitOneToOne } from '@pusher/chatkit-client-react';
import styled from 'styled-components';
import Editor from '../Code/Editor';
import Interface from '../Code/Interface';
import Terminal from '../Code/Terminal';

// import './Chat.css';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 75vh;
  width: 100%;

  .code-header-container {
    height: 12%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 2em;
  }

  .code-body-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
`;

function Chat(props) {
  const [editorState, setEditorState] = useState();
  const [output, setOutput] = React.useState('');
  const [language, setLanguage] = React.useState('javascript');

  // const handleSendMessage = () => {
  //   if (editorState === '') {
  //     return;
  //   }

  //   props.chatkit.sendSimpleMessage({ text: editorState });
  // };

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
          <FlexContainer>
            <div className='code-header-container'>
              <Interface
                editorState={
                  messages[messages.length - 1].textContent
                }
                // setEditorState={setEditorState}
                // sendMessage={props.chatkit.sendSimpleMessage}
                output={output}
                setOutput={setOutput}
                language={language}
                setLanguage={setLanguage}
              />
            </div>
            <div className='code-body-container'>
              <Editor
                output={output}
                setOutput={setOutput}
                editorState={
                  messages[messages.length - 1].textContent
                }
                setEditorState={setEditorState}
                sendMessage={props.chatkit.sendSimpleMessage}
                language={language}
                setLanguage={setLanguage}
              />
              <Terminal initialText='$  ' output={output} />
            </div>
          </FlexContainer>
        ) : // <Message
        //   textContent={messages[messages.length - 1].textContent}
        // />
        null}
      </div>
    </div>
  );
}

export default withChatkitOneToOne(Chat);
