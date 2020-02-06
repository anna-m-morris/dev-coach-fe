import React from 'react';
import styled from 'styled-components';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

// const SelectPriceStyle = styled.div`
//   border: 1px solid #ced4da;
// `;

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     border: '1px solid #ced4da',
//     borderRadius: '10rem',
//   },
// }));

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    minWidth: 120,
    borderRadius: 8,
    position: 'relative',
    // backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'box-shadow',
    ]),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const SelectPrice = props => {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant='none' className={classes.margin}>
        <InputLabel htmlFor='grouped-select'>Price</InputLabel>
        <Select
          defaultValue=''
          input={
            <BootstrapInput
              onChange={e => props.searchForPrice(e.target.value)}
              name='price'
              id='price-select'
            />
          }
        >
          <MenuItem value={1000}>All</MenuItem>
          <MenuItem value={20}>under 20$</MenuItem>
          <MenuItem value={40}>under 40$</MenuItem>
          <MenuItem value={60}>under 60$</MenuItem>
          <MenuItem value={80}>under 80$</MenuItem>
          <MenuItem value={100}>under 100$</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectPrice;
