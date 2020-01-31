import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import {
  mapLanguageToId,
  mapLanguageToEditorState,
} from '../../utils/executionHelpers';

const InterfaceContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .toggle-button {
    height: 52px;
    width: 52px;
  }
`;

const Interface = ({
  output,
  setOutput,
  language,
  setLanguage,
  editorState,
  setEditorState,
}) => {
  function logCode() {
    Axios.post('https://api.judge0.com/submissions?wait=false', {
      source_code: `${editorState}`,
      language_id: `${mapLanguageToId(language)}`,
    })
      .then(res => {
        console.log(res);
        setTimeout(() => {
          Axios.get(
            `https://api.judge0.com/submissions/${res.data.token}`,
          )
            .then(res => {
              console.log(res);
              if (res.data.stdout) {
                setOutput(res.data.stdout);
              } else if (res.data.compile_output) {
                setOutput(res.data.compile_output);
              } else if (res.data.stderr) {
                setOutput(res.data.stderr);
              } else {
                alert('Unable to run code');
              }
            })
            .catch(err => {});
        }, 1500);
      })
      .catch(err => {});
  }

  const handlePost = () => {
    logCode();
  };

  const handleSelection = event => {
    setLanguage(event.target.value);
    setEditorState(mapLanguageToEditorState(event.target.value));
  };

  return (
    <InterfaceContainer>
      <h1>Code Editor</h1>
      <FormControl>
        <InputLabel>Select Programming Language</InputLabel>
        <Select
          style={{ width: '20em' }}
          value={language}
          onChange={handleSelection}
        >
          <MenuItem value='javascript'>Javascript</MenuItem>
          <MenuItem value='python'>Python</MenuItem>
          <MenuItem value='java'>Java</MenuItem>
          <MenuItem value='c'>C</MenuItem>
          <MenuItem value='cpp'>C++</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Select Coding Challenge</InputLabel>
        <Select readOnly style={{ width: '20em' }} value=''>
          <MenuItem value='square'>Square a number</MenuItem>
          <MenuItem value='add'>Add two numbers</MenuItem>
          <MenuItem value='fizzbuzz'>Fizzbuzz</MenuItem>
          <MenuItem value='reverse'>Reverse a string</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handlePost}>Run Code</Button>
    </InterfaceContainer>
  );
};

export default connect(state => state)(Interface);
