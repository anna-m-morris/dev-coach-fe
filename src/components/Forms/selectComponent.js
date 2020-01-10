import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const inputLabel = React.useRef(null);

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel
            ref={inputLabel}
            id='demo-simple-select-outlined-label'
          >
            How confident are you in your interviewing ability?
          </InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
          >
            <MenuItem value={1}>
              I'm not confident in my ability to interview
              successfully
            </MenuItem>
            <MenuItem value={2}>
              I'm neither confident nor unconfident
            </MenuItem>
            <MenuItem value={3}>
              I'm somewhat confident, but want to improve
            </MenuItem>
            <MenuItem value={4}>
              I'm completely confident in my interviewing ability
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel
            ref={inputLabel}
            id='demo-simple-select-outlined-label'
          >
            How much programming experience do you have?
          </InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
          >
            <MenuItem value={1}>
              I've taken some online courses and built some personal
              projects
            </MenuItem>
            <MenuItem value={2}>
              I've completed a coding bootcamp or similar program
            </MenuItem>
            <MenuItem value={3}>
              I've completed a computer science undergraduate degree
            </MenuItem>
            <MenuItem value={4}>
              I have experience working as a professional developer
            </MenuItem>
            <MenuItem value={5}>
              I have significant experience working as a professional
              developer
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel
            ref={inputLabel}
            id='demo-simple-select-outlined-label'
          >
            How skilled are you as a software developer?
          </InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
          >
            <MenuItem value={1}>Pretty bad tbh</MenuItem>
            <MenuItem value={2}>Somewhat skilled</MenuItem>
            <MenuItem value={3}>Fairly skilled</MenuItem>
            <MenuItem value={4}>Highly skilled</MenuItem>
            <MenuItem value={5}>Extremely skilled</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel
            ref={inputLabel}
            id='demo-simple-select-outlined-label'
          >
            How experienced are you as a professional developer?
          </InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
          >
            <MenuItem value={1}>
              Junior level: 0-2 years of experience working as a
              professional
            </MenuItem>
            <MenuItem value={2}>
              Mid-level: 2-4 years of experience working as a
              professional
            </MenuItem>
            <MenuItem value={3}>
              Senior level: 4-8 years of experience working as a
              professional
            </MenuItem>
            <MenuItem value={4}>
              Highly experienced: 8+ years of professional experience
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}
