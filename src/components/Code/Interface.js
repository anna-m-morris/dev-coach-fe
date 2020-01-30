import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { ToggleButton } from '@material-ui/lab';
import {
  testCode,
  logCode,
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

const input1 = 3;
const input2 = 10;
const input3 = 329425;

const Interface = ({
  output,
  setOutput,
  language,
  setLanguage,
  editorState,
  setEditorState,
}) => {
  const [toggled, toggle] = React.useState();
  const handlePost = () => {
    const tests = [input1, input2, input3];
    if (mapLanguageToId(language) === 63) {
      tests.forEach(el => setOutput(testCode('square', el)));
    } else {
      setOutput(logCode(editorState, mapLanguageToId(language)));
    }
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
          <MenuItem value='cpp'>C++</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Select Coding Challenge</InputLabel>
        <Select
          style={{ width: '20em' }}
          value={language}
          onChange={handleSelection}
        >
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
