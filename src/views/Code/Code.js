import React from 'react';
import styled from 'styled-components';
import Editor from '../../components/Code/Editor';
import Interface from '../../components/Code/Interface';
import Terminal from '../../components/Code/Terminal';

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function Code() {
  return (
    <div>
      <FlexContainer>
        <Interface />
        <Editor />
        {/* <Terminal /> */}
      </FlexContainer>
    </div>
  );
}

export default Code;
