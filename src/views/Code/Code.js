import React from 'react';
import styled from 'styled-components';
import Editor from '../../components/Code/Editor';
import Interface from '../../components/Code/Interface';
import Terminal from '../../components/Code/Terminal';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  .code-header-container {
    height: 10%;
    width: 100%;
  }

  .code-body-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    .editor {
      width: 50%;
      height: 100%;
    }

    .terminal {
      width: 50%;
      height: 100%;
    }
  }
`;

function Code() {
  return (
    <FlexContainer>
      <div className='code-header-container'>
        <Interface />
      </div>
      <div className='code-body-container'>
        <Editor />
        <Terminal />
        <div className='terminal'></div>
      </div>
    </FlexContainer>
  );
}

export default Code;
