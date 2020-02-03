/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
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
  formatIfArr,
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
  testPassedCount,
  setTestPassedCount,
}) => {
  const invokeCode = (code, testCase, value, language) => {
    if (language === 'javascript') {
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
    }
    if (language === 'python') {
      if (value) {
        return `${code}\nprint(${testCase}(${value}))
        `;
      }
      return `${code}\nprint(${testCase}())`;
    }
  };
  // function testCode(testName, value) {
  //   let { testCase } = value;
  //   const { testResult } = value;
  //   if (typeof testCase === 'string') {
  //     testCase = `'${testCase}'`;
  //   }
  //   Axios.post('https://api.judge0.com/submissions?wait=false', {
  //     source_code: `${invokeCode(editorState, testName, testCase)}`,
  //     language_id: `${mapLanguageToId(language)}`,
  //   })
  //     .then(res => {
  //       console.log(res);
  //       setTimeout(() => {
  //         Axios.get(
  //           `https://api.judge0.com/submissions/${res.data.token}`,
  //         )
  //           .then(res => {
  //             // count++;
  //             console.log(count);
  //             let result;
  //             if (res.data.stdout) {
  //               if (res.data.stdout == testResult) {
  //                 result = 'Passed';
  //                 count++;
  //                 setTestPassedCount(prevCount => prevCount + 1);
  //               } else {
  //                 result = 'Failed';
  //               }
  //               setOutput(
  //                 prevOutput =>
  //                   `${prevOutput}${testName}(${testCase}): your code returned: ${
  //                     res.data.stdout
  //                   }Test ${result} ${
  //                     count === 3
  //                       ? `\n\nAll tests passed! ${testPassedCount}`
  //                       : ''
  //                   } \n`,
  //               );
  //             } else if (res.data.compile_output) {
  //               setOutput(`Error:  + ${res.data.compile_output}`);
  //             } else if (res.data.stderr) {
  //               setOutput(`Error: + ${res.data.stderr}`);
  //             } else {
  //               setOutput('Unable to run code');
  //             }
  //           })
  //           .catch(err => {});
  //       }, 2000);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
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

  console.log(invokeCode(editorState, 'square', 5, 'python'));

  function fetchExecutedCode(token) {
    return Axios.get(`https://api.judge0.com/submissions/${token}`);
  }

  console.log(testDataObj[currentTest]);

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
        console.log(response);
        let output = response.data.stdout;
        if (typeof testResultsArr[idx] === 'string') {
          output = response.data.stdout.substring(
            0,
            response.data.stdout.length - 1,
          );
        }
        if (output == testResultsArr[idx]) {
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

  console.log(currentTest);

  const handlePost = () => {
    setOutput('');
    if (currentTest) {
      setOutput(`Running tests...\n\n`);
      const { testData } = testDataObj[currentTest];
      // testData.forEach(el => testCode(currentTest, el));
      runAllCode(currentTest);
    } else {
      logCode();
    }
  };

  // const testResultsSquare = [25, 100, 5513104];
  // const squareSolution = el => el * el;

  // const checkTests = (testCases, expectedValues, solution) => {
  //   if (
  //     isEqual(
  //       testCases.map(el => solution(el)),
  //f       expectedValues,
  //     )
  //   ) {
  //     return true;
  //   }
  //   return false;
  // };

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
