import React from 'react';
import styled from 'styled-components';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';
import {
  mapLanguageToEditorState,
  mapLanguageToId,
  invokeCodeJS,
  logCode,
  testCode,
} from '../../utils/executionHelpers';

const EditorContainer = styled.div`
  width: 50%;
  height: 100%;

  .codemirror {
    height: 100%;
  }
`;

const javascriptInitialEditorState = `function square(x) {
    // your code goes here
  
  };
  `;

const pythonInitialEditorState = `# example code: print n fibonacci numbers
  
  a = 10
  
  def fib(n):
      a, b = 0, 1
      for _ in range(n):
          yield a
          a, b = b, a + b
  
  print(list(fib(a)))
  `;

const input1 = 3;
const input2 = 10;
const input3 = 329425;

const Editor = ({ output, setOutput }) => {
  const [editorState, setEditorState] = React.useState();
  const [language, setLanguage] = React.useState('javascript');

  const handleSelection = event => {
    setLanguage(event.target.value);
    setEditorState(mapLanguageToEditorState(event.target.value));
  };

  const handlePost = () => {
    const tests = [input1, input2, input3];
    if (mapLanguageToId(language) === 63) {
      tests.forEach(el => setOutput(testCode('square', el)));
    } else {
      setOutput(logCode(editorState, mapLanguageToId(language)));
    }
  };

  return (
    <EditorContainer>
      <CodeMirror
        className='codemirror'
        value={editorState}
        options={{
          mode: `${
            language === "java" || language === "cpp" ? "clike" : language
          }`,
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) =>
          setEditorState(value)
        }
        onChange={(editor, data, value) => {}}
        editorDidMount={editor => {
          editor.setSize('100%', '100%');
        }}
      />
    </EditorContainer>
  );
};

export default Editor;
