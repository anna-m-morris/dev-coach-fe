import React from 'react';
import styled from 'styled-components';
import Display from './components/Display';
import Editor from './components/Editor';

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function App() {
  const [output, setOutput] = React.useState('');

  return (
    <div>
      <FlexContainer>
        <Editor output={output} setOutput={setOutput} />
        <Display initialText='$  ' output={output} />
      </FlexContainer>
    </div>
  );
}

export default App;
