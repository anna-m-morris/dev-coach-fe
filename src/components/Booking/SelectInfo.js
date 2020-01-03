import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { saveSelect } from '../../state/actions/bookingActions';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

// let data = { 'topic-select': null, 'length-select': null };
// // global value for now => later handle change with redux

const SelectInfo = props => {
  // const [length, setLength] = React.useState('');

  // const handleChange = event => {
  //   setLength(event.target.value);
  //   // check event target name and decide which input (handle with redux)

  //   data[event.target.name] = event.target.value;

  //   // safe data object as redux state and if longer than 1 so the last
  //   // data got added let the screen disappear and let the student make the payment

  //   console.log(event.target.name, event.target.value, data);
  // };

  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='grouped-select'>Length</InputLabel>
        <Select
          defaultValue=''
          input={
            <Input
              onChange={props.saveSelect}
              name='length-select'
              id='length-select'
            />
          }
        >
          <MenuItem value={1}>30 Minutes</MenuItem>
          <MenuItem value={2}>1 Hour</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='grouped-select'>Topic</InputLabel>
        <Select
          defaultValue=''
          input={
            <Input
              onChange={props.saveSelect}
              name='topic-select'
              id='topic-select'
            />
          }
        >
          <MenuItem value={1}>Frontend</MenuItem>
          <MenuItem value={2}>Backend</MenuItem>
          <MenuItem value={3}> Algortihms / Data Structes</MenuItem>
          <MenuItem value={4}>Behavorial Interview</MenuItem>
          <MenuItem value={5}>System Design</MenuItem>
          <MenuItem value={6}>React</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     timePicker: state.bookingReducer.timePicker,
//     date: state.bookingReducer.date,
//   };
// };

export default connect(null, { saveSelect })(SelectInfo);
