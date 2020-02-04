import React, { Component } from 'react';
import Pusher from 'pusher-js';
import pushid from 'pushid';
import axios from 'axios';
import { connect } from 'react-redux';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { JSHINT } from 'jshint';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/json-lint';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/selection/active-line';
import styled from 'styled-components';
import Terminal from '../../components/Interview/Terminal';
import Room from '../../components/Interview/Room';
import { isEqual } from 'lodash';
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
  executeCode,
  testDataObj,
  fetchExecutedCode,
} from '../../utils/executionHelpers';
import devices from '../../utils/devices';

window.JSHINT = JSHINT;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 88vh;
  width: 100%;

  .code-header-container {
    height: 12%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 2em;
  }

  .code-body-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const EditorContainer = styled.div`
  width: 55%;
  height: 100%;

  .codemirror {
    height: 100%;
  }

  * {
    font-family: 'Inconsolata', sans-serif;
  }
`;

const InterfaceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .title {
    text-align: center;
  }

  .form-control {
    width: 30%;
  }

  .input-label {
    @media ${devices.mobile} {
      display: none;
    }
  }
`;

const TerminalVideoContainer = styled.div`
  width: 45%;
  height: 100%;
`;

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      output: '',
      editorState: '',
      currentTest: '',
      language: 'javascript',
      channelName:
        this.props.user.role_id === 1
          ? `${this.props.user.email}-${this.props.peerId}`
          : `${this.props.peerId}-${this.props.user.email}`,
    };

    this.pusher = new Pusher('9ebd578e6fc08eeb098e', {
      cluster: 'eu',
      forceTLS: true,
    });

    this.channel = this.pusher.subscribe(this.state.channelName);
  }

  componentDidMount() {
    this.setState({
      id: pushid(),
    });

    this.channel.bind('text-update', data => {
      const { id } = this.state;
      if (data.id === id) return;

      this.setState({
        editorState: data.editorState,
        output: data.output,
        language: data.language,
      });
    });
  }

  syncUpdates = () => {
    const data = { ...this.state };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}editor/update`, {
        update: data,
        channelName: this.state.channelName,
      })
      .catch(console.error);
  };

  invokeCode = (code, param, value) => {
    return `
    ${code}
    console.log(${param}(${value}));
    `;
  };

  setOutput = value => {
    this.setState({ output: value });
  };

  // testCode = (testCase, value) => {
  //   axios
  //     .post('https://api.judge0.com/submissions?wait=false', {
  //       source_code: `${this.invokeCode(
  //         this.state.editorState,
  //         testCase,
  //         value,
  //       )}`,
  //       language_id: `${mapLanguageToId(this.state.language)}`,
  //     })
  //     .then(res => {
  //       setTimeout(() => {
  //         axios
  //           .get(
  //             `https://api.judge0.com/submissions/${res.data.token}`,
  //           )
  //           .then(res => {
  //             if (res.data.stdout) {
  //               // setOutput(
  //               //   prevArr =>
  //               //     `${prevArr}Against test input of ${value}, your code returned: ${res.data.stdout}`,
  //               // );
  //               this.setState({
  //                 output: `${this.state.output}Against test input of ${value}, your code returned: ${res.data.stdout}`,
  //               });
  //               this.syncUpdates();
  //             } else if (res.data.compile_output) {
  //               // setOutput(`Error:  + ${res.data.compile_output}`);
  //               this.setState({
  //                 output: `Error:  + ${res.data.compile_output}`,
  //               });
  //               this.syncUpdates();
  //             } else {
  //               // setOutput('Unable to run code');
  //               this.setState({
  //                 output: `Error:  + ${res.data.compile_output}`,
  //               });
  //               this.syncUpdates();
  //             }
  //           })
  //           .catch(err => {});
  //       }, 2000);
  //     })
  //     .catch(err => {});
  // };

  logCode = () => {
    axios
      .post('https://api.judge0.com/submissions?wait=false', {
        source_code: `${this.state.editorState}`,
        language_id: `${mapLanguageToId(this.state.language)}`,
      })
      .then(res => {
        setTimeout(() => {
          axios
            .get(
              `https://api.judge0.com/submissions/${res.data.token}`,
            )
            .then(res => {
              if (res.data.stdout) {
                this.setState({ output: res.data.stdout });
                // setOutput(res.data.stdout);
                this.syncUpdates();
              } else if (res.data.compile_output) {
                this.setState({ output: res.data.compile_output });
                // setOutput(res.data.compile_output);
                this.syncUpdates();
              } else if (res.data.stderr) {
                this.setState({ output: res.data.stderr });
                this.syncUpdates();
                // setOutput(res.data.stderr);
              } else {
                alert('Unable to run code');
              }
            })
            .catch(err => {});
        }, 2000);
      })
      .catch(err => {});
  };

  runAllCode = async (currentTest, language, editorState) => {
    const { testData } = testDataObj[currentTest];
    const testCaseArr = testData.map(el => el.testCase);
    const testResultsArr = testData.map(el => el.testResult);
    const passedTestsArr = [];
    for (const [idx, el] of testCaseArr.entries()) {
      const executedCode = await executeCode(
        currentTest,
        el,
        editorState,
        language,
      );
      const { token } = executedCode.data;
      setTimeout(async () => {
        const response = await fetchExecutedCode(token);
        let output = response.data.stdout;
        if (
          typeof testResultsArr[idx] === 'string' &&
          response.data.stdout
        ) {
          output = response.data.stdout.substring(
            0,
            response.data.stdout.length - 1,
          );
        }
        if (output === testResultsArr[idx]) {
          passedTestsArr.push('true');
        }
        this.setState(prevOutput => {
          return {
            output: `${prevOutput}Test ${idx + 1}: ${currentTest}(${
              testCaseArr[idx]
            }) received ${output}\n\n`,
          };
        });
        if (
          idx === testCaseArr.length - 1 &&
          passedTestsArr.length === testCaseArr.length
        ) {
          this.setState(prevOutput => {
            return {
              output: `${prevOutput}\nAll tests passed! Good job.`
            }
          })
        } else if (
          idx === testCaseArr.length - 1 &&
          passedTestsArr.length < testCaseArr.length
        ) {
          this.setState(prevState => {
            return {
              output: `${prevOutput}\nTests failing, check your code!`
            }
          })
        }
      }, 2000);
    }
  };

  handlePost = () => {
    this.setState({ output: [] });
    this.syncUpdates();
    if (this.state.currentTest) {
      this.runAllCode(
        this.state.currentTest,
        this.state.language,
        this.state.editorState,
      );
    }
  };

  handleSelection = event => {
    // setLanguage(event.target.value);
    // setEditorState(mapLanguageToEditorState(event.target.value));
    this.setState({
      language: event.target.value,
      editorState: mapLanguageToEditorState(event.target.value),
    });

    this.syncUpdates();
  };

  handleTestSelection = event => {
    const selectedTest = event.target.value;
    this.setState({
      currentTest: selectedTest,
    });
    if (testDataObj[selectedTest]) {
      this.setState({
        editorState: testDataObj[selectedTest].state,
      });
    }
  };

  render() {
    return (
      <FlexContainer>
        <div className='code-header-container'>
          <InterfaceContainer>
            <h1 className='title'>DevCoach IDE</h1>
            <FormControl className='form-control'>
              <InputLabel className='input-label'>
                Select Programming Language
              </InputLabel>
              <Select
                value={this.state.language}
                onChange={this.handleSelection}
              >
                <MenuItem value='javascript'>Javascript</MenuItem>
                <MenuItem value='python'>Python</MenuItem>
                <MenuItem value='java'>Java</MenuItem>
                <MenuItem value='c'>C</MenuItem>
                <MenuItem value='cpp'>C++</MenuItem>
              </Select>
            </FormControl>
            <FormControl className='form-control'>
              <InputLabel className='input-label'>
                Select Coding Challenge
              </InputLabel>
              <Select
                onChange={this.handleTestSelection}
                value={this.state.currentTest}
              >
                <MenuItem value='square'>Square a number</MenuItem>
                <MenuItem value='add'>Add two numbers</MenuItem>
                <MenuItem value='reverse'>Reverse a string</MenuItem>
                <MenuItem value='rockPaperScissors'>
                  Rock Paper Scissors
                </MenuItem>
                <MenuItem value='fibonacci'>Fibonacci</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={this.handlePost}>Run Code</Button>
          </InterfaceContainer>
        </div>
        <div className='code-body-container'>
          <EditorContainer>
            <CodeMirror
              className='codemirror'
              value={this.state.editorState}
              options={{
                mode: `${
                  this.state.language === 'java' ||
                  this.state.language === 'c' ||
                  this.state.language === 'cpp'
                    ? 'clike'
                    : this.state.language
                }`,
                theme: 'lucario',
                lineNumbers: true,
                lineWrapping: true,
                styleActiveLine: true,
                activeCloseBrackets: true,
                gutters: ['Codemirror-lint-markers'],
                lint: { esversion: '6' },
              }}
              onBeforeChange={(editor, data, value) => {
                this.setState({ editorState: value }, () =>
                  this.syncUpdates(),
                );
                // this.setState({ js }, () => this.syncUpdates());
              }}
              onChange={(editor, data, value) => {}}
              editorDidMount={editor => {
                editor.setSize('100%', '100%');
              }}
            />
          </EditorContainer>
          <TerminalVideoContainer>
            <Terminal initialText='$  ' output={this.state.output} />
            <Room
              roomName={this.props.Room.roomName}
              token={this.props.Room.token}
              handleLogout={this.props.Room.handleLogout}
            />
          </TerminalVideoContainer>
        </div>
      </FlexContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    peerId: state.interviewReducer.peerId,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(Code);
