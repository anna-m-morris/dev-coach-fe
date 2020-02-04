/* eslint-disable no-multi-str */
import Axios from 'axios';

export const testDataObj = {
  square: {
    state: `function square(x) {
  // enter code below to return the square of a number
}
    `,
    testData: [
      { testCase: 5, testResult: 25 },
      { testCase: 10, testResult: 100 },
      { testCase: 2348, testResult: 5513104 },
    ],
  },
  add: {
    state: `function add (x, y) {
  // enter code below to add two numbers and return the sum
}
    `,
    testCases: [
      [1, 2],
      [345, 829],
      [384724323, 23948293819],
    ],
    testResults: [3, 1174, 24333018142],
    testData: [
      { testCase: [1, 2], testResult: 3 },
      { testCase: [345, 829], testResult: 1174 },
      { testCase: [384724323, 23948293819], testResult: 24333018142 },
    ],
  },
  reverseAString: {
    state: `function reverseAString(str) {
  // enter code below to take a string as input 
  // and return the same string, reversed.
}
    `,
    testData: [
      { testCase: 'Hello, world!', testResult: '!dlrow ,olleH' },
      { testCase: 'Lor3m 1psum', testResult: 'musp1 m3roL' },
      {
        testCase: 'Welcome to DevCoach.com!',
        testResult: '!moc.hcaoCveD ot emocleW',
      },
    ],
  },
  rockPaperScissors: {
    state: `function rockPaperScissors(numOfRounds) {
// Write a function called rockPaperScissors that will take a number // n, and output "n" number of possible combinations of 'rock',      // 'paper', and 'scissors'. ;)
}`,
    testData: [
      {
        testCase: 1,
        testResult: "[ [ 'rock' ], [ 'paper' ], [ 'scissors' ] ]",
      },
      {
        testCase: 2,
        testResult: `[
  [ 'rock', 'rock' ],
  [ 'rock', 'paper' ],
  [ 'rock', 'scissors' ],
  [ 'paper', 'rock' ],
  [ 'paper', 'paper' ],
  [ 'paper', 'scissors' ],
  [ 'scissors', 'rock' ],
  [ 'scissors', 'paper' ],
  [ 'scissors', 'scissors' ]
]`,
      },
      {
        testCase: 3,
        testResult: `[
  [ 'rock', 'rock', 'rock' ],
  [ 'rock', 'rock', 'paper' ],
  [ 'rock', 'rock', 'scissors' ],
  [ 'rock', 'paper', 'rock' ],
  [ 'rock', 'paper', 'paper' ],
  [ 'rock', 'paper', 'scissors' ],
  [ 'rock', 'scissors', 'rock' ],
  [ 'rock', 'scissors', 'paper' ],
  [ 'rock', 'scissors', 'scissors' ],
  [ 'paper', 'rock', 'rock' ],
  [ 'paper', 'rock', 'paper' ],
  [ 'paper', 'rock', 'scissors' ],
  [ 'paper', 'paper', 'rock' ],
  [ 'paper', 'paper', 'paper' ],
  [ 'paper', 'paper', 'scissors' ],
  [ 'paper', 'scissors', 'rock' ],
  [ 'paper', 'scissors', 'paper' ],
  [ 'paper', 'scissors', 'scissors' ],
  [ 'scissors', 'rock', 'rock' ],
  [ 'scissors', 'rock', 'paper' ],
  [ 'scissors', 'rock', 'scissors' ],
  [ 'scissors', 'paper', 'rock' ],
  [ 'scissors', 'paper', 'paper' ],
  [ 'scissors', 'paper', 'scissors' ],
  [ 'scissors', 'scissors', 'rock' ],
  [ 'scissors', 'scissors', 'paper' ],
  [ 'scissors', 'scissors', 'scissors' ]
]`,
      },
    ],
  },
  fibonacci: {
    state: `function fibonacci(n) {
// Given an integer n, calculate the first n numbers in the fibonacci sequence. Return the numbers in an array.
}`,
    testData: [
      {
        testCase: 8,
testResult: `[
  0, 1, 1,  2,
  3, 5, 8, 13
]`,
      },
      {
        testCase: 50,
        testResult: `[
          0,          1,          1,          2,
          3,          5,          8,         13,
         21,         34,         55,         89,
        144,        233,        377,        610,
        987,       1597,       2584,       4181,
       6765,      10946,      17711,      28657,
      46368,      75025,     121393,     196418,
     317811,     514229,     832040,    1346269,
    2178309,    3524578,    5702887,    9227465,
   14930352,   24157817,   39088169,   63245986,
  102334155,  165580141,  267914296,  433494437,
  701408733, 1134903170, 1836311903, 2971215073,
 4807526976, 7778742049
]`,
      }
    ],
  },
};

const javascriptInitialEditorState = `console.log('hello JS!');`;

const pythonInitialEditorState = `# example code: print n fibonacci numbers

a = 10
  
def fib(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fib(a)))
`;

const cppInitialState = `#include <iostream>

int main() {
    std::cout << "hello, c++!" << std::endl;
    return 0;
}
`;

const javaInitialState = `public class Main {
  public static void main(String[] args) {
      System.out.println("hello, java!");
  }
}
`;

const cInitialState = `#include <stdio.h>

int main(void) {
    printf("hello, c! \\n");
    return 0;
}
`;

export const mapLanguageToEditorState = (language, editorState) => {
  switch (language) {
    default:
      return javascriptInitialEditorState;
    case 'javascript':
      return javascriptInitialEditorState;
    case 'python':
      return pythonInitialEditorState;
    case 'c':
      return cInitialState;
    case 'cpp':
      return cppInitialState;
    case 'java':
      return javaInitialState;
  }
};

export const mapLanguageToId = language => {
  switch (language) {
    default:
      return 63;
    case 'javascript':
      return 63;
    case 'python':
      return 71;
    case 'java':
      return 62;
    case 'c':
      return 50;
    case 'cpp':
      return 54;
  }
};

export const invokeCodeJS = (code, param, value) => {
  return `
    ${code}
    console.log(${param}(${value}));
    `;
};

export function logCode(code, language, setOutput) {
  Axios.post('https://api.judge0.com/submissions?wait=false', {
    source_code: `${code}`,
    language_id: `${mapLanguageToId(language)}`,
  })
    .then(res => {
      setTimeout(() => {
        Axios.get(
          `https://api.judge0.com/submissions/${res.data.token}`,
        )
          .then(res => {
            if (res.data.stdout) {
              setOutput(res.data.stdout);
            }
            if (res.data.compile_output) {
              setOutput(res.data.compile_output);
            }
            return 'Unable to run code';
          })
          .catch(err => {});
      }, 1000);
    })
    .catch(err => {});
}

export function testCode(value, testCase, code, languageId) {
  Axios.post('https://api.judge0.com/submissions?wait=false', {
    source_code: `${invokeCodeJS(code, testCase, value)}`,
    language_id: `${languageId}`,
  })
    .then(res => {
      setTimeout(() => {
        Axios.get(
          `https://api.judge0.com/submissions/${res.data.token}`,
        )
          .then(res => {
            if (res.data.stdout) {
              console.log(
                `Against test input of ${value}, your code evaluated to: ${res.data.stdout}`,
              );
            } else if (res.data.compile_output) {
              return `Error: + ${res.data.compile_output}`;
            } else {
              return 'Unable to run code';
            }
          })
          .catch(err => {});
      }, 2000);
    })
    .catch(err => {});
}

export function formatIfArr(data) {
  return Array.isArray(data) ? data.join(',') : data;
}
