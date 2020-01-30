import React from 'react';
import styled from 'styled-components';
import Editor from '../../components/Code/Editor';
import Interface from '../../components/Code/Interface';
import Terminal from '../../components/Code/Terminal';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background: violet;

  .interface {
    background: palegoldenrod;
    height: 5em;
    width: 100%;
    margin-top: 2em;
  }

  .editor {
    background: coral;
  }

  .terminal {
    background: green;
  }
`;

function Code() {
  return (
    <FlexContainer>
      {/* <Interface /> */}
      {/* <Editor /> */}
      {/* <Terminal />   */}
      <div className='interface'></div>
      <div className='editor'></div>
      <div className='terminal'></div>
    </FlexContainer>
  );
}

export default Code;
