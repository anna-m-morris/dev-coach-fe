/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
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
  testDataObj,
  invokeCode,
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
  setOutput,
  language,
  setLanguage,
  editorState,
  setEditorState,
  currentTest,
  setCurrentTest,
}) => {

  function logCode() {
    Axios.post('https://api.judge0.com/submissions?wait=false', {
      source_code: `${editorState}`,
      language_id: `${mapLanguageToId(language)}`,
    })
      .then(res => {
        setTimeout(() => {
          Axios.get(
            `https://api.judge0.com/submissions/${res.data.token}`,
          )
            .then(res => {
              console.log(res.data.time);
              if (res.data.stdout) {
                setOutput(`${res.data.stdout}`);
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

  function executeCode(testName, value) {
    if (typeof value === 'string') {
      value = `'${value}'`;
    }
    return Axios.post(
      'https://api.judge0.com/submissions?wait=false',
      {
        source_code: `${invokeCode(
          editorState,
          testName,
          value,
          language,
        )}`,
        language_id: `${mapLanguageToId(language)}`,
      },
    );
  }

  function fetchExecutedCode(token) {
    return Axios.get(`https://api.judge0.com/submissions/${token}`);
  }

  async function runAllCode(currentTest) {
    const { testData } = testDataObj[currentTest];
    const testCaseArr = testData.map(el => el.testCase);
    const testResultsArr = testData.map(el => el.testResult);
    const passedTestsArr = [];
    for (const [idx, el] of testCaseArr.entries()) {
      const executedCode = await executeCode(currentTest, el);
      const { token } = executedCode.data;
      setTimeout(async () => {
        const response = await fetchExecutedCode(token);
        console.log(
          JSON.stringify(response.data.stdout),
          '\n\n',
          JSON.stringify(testResultsArr[idx]),
        );
        let output = response.data.stdout;
        if (typeof testResultsArr[idx] === 'string') {
          output = response.data.stdout.substring(
            0,
            response.data.stdout.length - 1,
          );
        }
        if (output === testResultsArr[idx]) {
          passedTestsArr.push('true');
        }
        setOutput(
          prevOutput =>
            `${prevOutput}Test ${idx + 1}: ${currentTest}(${
              testCaseArr[idx]
            }) received ${output}\n\n`,
        );
        if (
          idx === testCaseArr.length - 1 &&
          passedTestsArr.length === testCaseArr.length
        ) {
          setOutput(
            prevOutput =>
              `${prevOutput}\nAll tests passed! Good job.`,
          );
        } else if (idx === testCaseArr.length - 1) {
          setOutput(
            prevOutput =>
              `${prevOutput}\nTests failing, check your code!`,
          );
        }
      }, 2000);
    }
  }

  const handlePost = () => {
    setOutput('');
    if (currentTest) {
      setOutput(`Running tests...\n\n`);
      runAllCode(currentTest);
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
  };

  React.useEffect(() => {
    function handlekeydownEvent(event) {
      if (event.keyCode === 13 && event.ctrlKey) {
        console.log(language, editorState);
        logCode();
      }
    }

    document.addEventListener('keyup', handlekeydownEvent);
    return () => {
      document.removeEventListener('keyup', handlekeydownEvent);
    };
  }, [editorState, language]);

  return (
    <InterfaceContainer>
      <h1>DevCoach IDE</h1>
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
          <MenuItem value='reverseAString'>Reverse a string</MenuItem>
          <MenuItem value='rockPaperScissors'>
            Rock Paper Scissors
          </MenuItem>
          <MenuItem value='fibonacci'>Fibonacci</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handlePost}>Run Code</Button>
    </InterfaceContainer>
  );
};

export default connect(state => state)(Interface);
