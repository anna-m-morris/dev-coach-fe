import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SelectPrice = props => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='grouped-select'>Length</InputLabel>
        <Select
          defaultValue=''
          input={
            <Input
              onChange={props.searchForPrice}
              name='price'
              id='price-select'
            />
          }
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={20}>$20</MenuItem>
          <MenuItem value={50}>$21 - $50</MenuItem>
          <MenuItem value={80}>$51 - $80</MenuItem>
          <MenuItem value={100}>$81 - $100</MenuItem>
          <MenuItem value={150}>>$100</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectPrice
