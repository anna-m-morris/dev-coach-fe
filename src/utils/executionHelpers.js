import Axios from 'axios';

export const mapLanguageToEditorState = (language, editorState) => {
  switch (language) {
    default:
      return editorState.javascript;
    case 'javascript':
      return editorState.javascript;
    case 'python':
      return editorState.python;
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

export function logCode(code, languageId) {
  Axios.post('https://api.judge0.com/submissions?wait=false', {
    source_code: `${code}`,
    language_id: `${mapLanguageToId(languageId)}`,
  })
    .then(res => {
      setTimeout(() => {
        Axios.get(
          `https://api.judge0.com/submissions/${res.data.token}`,
        )
          .then(res => {
            if (res.data.stdout) {
              return res.data.stdout;
            }
            if (res.data.compile_output) {
              return res.data.compile_output;
            }
            return 'Unable to run code';
          })
          .catch(err => {
            console.log(err);
          });
      }, 1000);
    })
    .catch(err => {
      console.log(err);
    });
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
          .catch(err => {
            console.log(err);
          });
      }, 2000);
    })
    .catch(err => {
      console.log(err);
    });
}
