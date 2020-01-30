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

const TerminalText = styled.p`
  color: white;
  width: 100%;
  height: 1.5em;
  padding: 1em;
  margin-top: 0;
  font-family: 'Courier', sans-serif;
  font-size: 1em;

  :focus {
    outline: none;
  }
`;

const Terminal = ({ initialText, output }) => {
  return (
    <TerminalContainer>
      <TerminalText>{initialText + output}</TerminalText>
    </TerminalContainer>
  );
};

export default Terminal;
