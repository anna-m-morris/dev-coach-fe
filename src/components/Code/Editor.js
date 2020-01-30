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

const input1 = 3;
const input2 = 10;
const input3 = 329425;

const Editor = ({
  output,
  setOutput,
  language,
  setLanguage,
  editorState,
  setEditorState,
}) => {
  return (
    <EditorContainer>
      <CodeMirror
        className='codemirror'
        value={editorState}
        options={{
          mode: 'javascript',
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
