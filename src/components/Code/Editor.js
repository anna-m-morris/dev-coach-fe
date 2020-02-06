import React from 'react';
import { JSHINT } from 'jshint';
import styled from 'styled-components';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/haskell/haskell';
import 'codemirror/mode/go/go';
import 'codemirror/mode/rust/rust';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/json-lint';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/selection/active-line';

window.JSHINT = JSHINT;

const EditorContainer = styled.div`
  width: 50%;
  height: 100%;

  * {
    font-family: 'Inconsolata', sans-serif;
  }

  .codemirror {
    height: 100%;
  }
`;

export const Editor = ({ editorState, setEditorState, language }) => {
  return (
    <EditorContainer>
      <CodeMirror
        className='codemirror'
        value={editorState}
        options={{
          mode: `${
            language === 'java' ||
            language === 'c' ||
            language === 'cpp'
              ? 'clike'
              : language
          }`,
          indentWithTabs: true,
          theme: 'lucario',
          lineNumbers: true,
          lineWrapping: true,
          styleActiveLine: true,
          autoCloseBrackets: true,
          gutters: ['CodeMirror-lint-markers'],
          lint: { esversion: '6' },
        }}
        onBeforeChange={(editor, data, value) =>
          setEditorState(value)
        }
        onChange={(editor, data, value) => {}}
        editorDidMount={editor => {
          editor.setSize('100%', '100%');
          editor.setOption('styleactiveline', true);
        }}
      />
    </EditorContainer>
  );
};

export default Editor;
