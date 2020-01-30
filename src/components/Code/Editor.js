import React from 'react';
import styled from 'styled-components';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';

// todos

const editorState = {};
const setEditorState = () => {};
const language = {};

const EditorContainer = styled.div`
  width: 45%;
  height: 100%;

  .codemirror {
    height: 100%;
  }
`;

const Editor = () => {
  const [editorState, setEditorState] = React.useState();

  return (
    <EditorContainer>
      <CodeMirror
        className='codemirror'
        value={editorState}
        options={{
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
