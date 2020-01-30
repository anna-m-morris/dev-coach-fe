import React from 'react';
import styled from 'styled-components'
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';

// todos

const editorState = {};
const setEditorState = () => {};
const language = {};

const EditorContainer = styled.div`
  width: 100%;
`;

const Editor = () => {
  return (
    <EditorContainer>
      <CodeMirror
        options={{
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {}}
        onChange={(editor, data, value) => {}}
      />
    </EditorContainer>
  );
};

export default Editor;
