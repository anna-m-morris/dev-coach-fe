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

