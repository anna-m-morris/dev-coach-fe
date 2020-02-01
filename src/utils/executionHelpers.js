import Axios from 'axios';

export const testDataObj = {
  square: {
    state: `function square(x) {
      // enter code below to return the square of a number
    }
    `,
    testCases: [5, 10, 2348],
    testResults: [25, 100, 5513104],
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
  },
  reverseAString: {
    state: `function reverseAString(str) {
      // enter code below to take as string as input and return the same string, reversed.
    }
    `,
    testCases: [
      'Hello, world!',
      'Lor3m 1psum',
      'Welcome to DevCoach.com!',
    ],
    testResults: [
      '!dlrow ,olleH',
      'musp1 m3roL',
      '!moc.hcaoCveD ot emocleW',
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
