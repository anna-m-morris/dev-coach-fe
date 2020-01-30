import React from 'react';
import styled from 'styled-components';
import Editor from '../../components/Code/Editor';
import Interface from '../../components/Code/Interface';
import Terminal from '../../components/Code/Terminal';

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background: red;
`;

function Code() {
  return (
    <FlexContainer>
      <Interface />
      <Editor />
      <Terminal />
    </FlexContainer>
  );
}

export default Code;
