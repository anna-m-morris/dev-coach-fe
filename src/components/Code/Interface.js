import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';

// todos:

const handlePost = () => {};
const handleSelection = () => {};
const language = {};

const Interface = () => {
  return (
    <div>
      <h1>Code Editor</h1>
      <Button onClick={handlePost}>Submit</Button>
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
    </div>
  );
};

export default connect(state => state)(Interface);
