import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { isEqual } from 'lodash';
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
  testDataObj,
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
  currentTest,
  setCurrentTest,
}) => {
  const invokeCode = (code, testCase, value) => {
    if (value) {
      return `
      ${code}
      console.log(${testCase}(${value}));
      `;
    }
    return `
      ${code}
      console.log(${testCase}());
      `;
  };
  function testCode(testCase, value) {
    if (typeof value === 'string') {
      value = `'${value}'`;
    }
    Axios.post('https://api.judge0.com/submissions?wait=false', {
      source_code: `${invokeCode(editorState, testCase, value)}`,
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
                setOutput(
                  prevOutput =>
                    `${prevOutput}Against test input of ${value}, your code returned: ${res.data.stdout}`,
                );
              } else if (res.data.compile_output) {
                setOutput(`Error:  + ${res.data.compile_output}`);
              } else if (res.data.stderr) {
                setOutput(`Error: + ${res.data.stderr}`);
              } else {
                setOutput('Unable to run code');
              }
            })
            .catch(err => {});
        }, 2000);
      })
      .catch(err => {
        console.log(err);
      });
  }
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
        }, 2000);
      })
      .catch(err => {});
  }

  // const testResultsSquare = [25, 100, 5513104];
  // const squareSolution = el => el * el;

  // const checkTests = (testCases, expectedValues, solution) => {
  //   if (
  //     isEqual(
  //       testCases.map(el => solution(el)),
  //       expectedValues,
  //     )
  //   ) {
  //     return true;
  //   }
  //   return false;
  // };

  const handlePost = () => {
    setOutput('');
    if (currentTest) {
      setOutput(`Running tests...\n`);
      const { testCases } = testDataObj[currentTest];
      console.log(testCases);
      testCases.forEach(el => testCode(currentTest, el));
    } else {
      logCode();
    }
  };

  const handleLanguageSelection = event => {
    setLanguage(event.target.value);
    setEditorState(mapLanguageToEditorState(event.target.value));
  };

  const handleTestSelection = event => {
    const selectedTest = event.target.value;
    setCurrentTest(selectedTest);
    if (testDataObj[selectedTest]) {
      setEditorState(testDataObj[selectedTest].state);
    }
    // if (testDataObj[selectedTest]) {
    //   setEditorState(currentTest[selectedTest].state);
    // }
  };

  return (
    <InterfaceContainer>
      <h1>Code Editor</h1>
      <FormControl>
        <InputLabel>Select Programming Language</InputLabel>
        <Select
          style={{ width: '20em' }}
          value={language}
          onChange={handleLanguageSelection}
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
        <Select
          style={{ width: '20em' }}
          value={currentTest}
          onChange={handleTestSelection}
        >
          <MenuItem value=''>None</MenuItem>
          <MenuItem value='square'>Square a number</MenuItem>
          <MenuItem value='add'>Add two numbers</MenuItem>
          <MenuItem value='fizzBuzz'>Fizzbuzz</MenuItem>
          <MenuItem value='reverseAString'>Reverse a string</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handlePost}>Run Code</Button>
    </InterfaceContainer>
  );
};

export default connect(state => state)(Interface);
