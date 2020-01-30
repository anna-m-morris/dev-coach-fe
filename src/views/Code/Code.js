import React from 'react';
import styled from 'styled-components';
import Editor from '../../components/Code/Editor';
import Interface from '../../components/Code/Interface';
import Terminal from '../../components/Code/Terminal';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-height: 100vh;

  .code-header-container {
    background: green;
    height: 100%;
    width: 50vh;
  }
`;

function Code() {
  return (
    <FlexContainer>
      <div className='code-header-container'>
        <Interface />
      </div>
      <div className='code-body-container'>
        {/* <Editor />
        <Terminal /> */}
      </div>
    </FlexContainer>
  );
}

export default Code;
