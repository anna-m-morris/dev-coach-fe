import React from 'react';
import styled from 'styled-components';

const TerminalContainer = styled.div`
  width: 100%;
  height: 50%;
  background: #0e1628;
  * {
    font-family: 'Inconsolata', sans-serif;
  }
`;

const TerminalText = styled.textarea`
  color: white;
  background: #0e1628;
  border: none;
  height: 100%;
  width: 100%;
  padding: 1em;
  padding-top: 0.5em;
  margin-top: 0;
  font-size: 1em;
  resize: none;
  padding-bottom: 1em;

  :focus {
    outline: none;
  }

  :hover {
    cursor: default;
  }
`;

const Terminal = ({ output }) => {
  return (
    <TerminalContainer>
      <TerminalText value={output || '$'}></TerminalText>
    </TerminalContainer>
  );
};

export default Terminal;
