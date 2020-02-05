import React from 'react';
import styled from 'styled-components';

const TerminalContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 0.5em;
  background: #0e1628;
  * {
    text-decoration: none;
  }
`;

const TerminalText = styled.textarea`
  color: white;
  background: #0e1628;
  border: none;
  width: 100%;
  height: 35em;
  overflow: auto;
  padding: 1em;
  padding-top: 0.5em;
  margin-top: 0;
  font-size: 1em;
  resize: none;

  :focus {
    outline: none;
  }

  :hover {
    cursor: default;
  }
`;

const Terminal = ({ initialText, output }) => {
  return (
    <TerminalContainer>
      <TerminalText
        contentEditable='false'
        value={output || '$'}
      ></TerminalText>
    </TerminalContainer>
  );
};

export default Terminal;
