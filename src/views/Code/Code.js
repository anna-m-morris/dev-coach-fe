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
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  background: violet;

  .interface {
    background: blue;
    height: 5em;
    width: 100%;
  }

  .editor {
    background: coral;
    height: 40em;
    width: 50%;
  }

  .terminal {
    background: green;
  }
`;

function Code() {
  return (
    <FlexContainer>
      <Interface />
      {/* <Editor /> */}
      {/* <Terminal />   */}
      {/* <div className='interface'></div> */}
      <div className='editor'></div>
      <div className='terminal'></div>
    </FlexContainer>
  );
}

export default Code;
