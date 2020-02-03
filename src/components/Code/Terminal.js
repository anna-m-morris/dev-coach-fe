import React from 'react';
import styled from 'styled-components';

const TerminalContainer = styled.div`
  width: 50%;
  height: 100%;
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
  padding: 1em;
  padding-top: 0.5em;
  margin-top: 0;
  font-family: 'Courier', sans-serif;
  font-size: 1em;

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
        suppressContentEditableWarning={true}
        value={output}
        contentEditable='false'
        readOnly
      ></TerminalText>
    </TerminalContainer>
  );
};

export default Terminal;
