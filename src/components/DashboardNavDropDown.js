import React from 'react';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

export default function DashboardNavDropDown(props) {
  return (
    <div>
      <Button
        onClick={props.handleClick}
        aria-controls='simple-menu'
        aria-haspopup='true'
      >
        <ArrowDropDownRoundedIcon />
      </Button>
      <Menu
        id='simple-menu'
        dropDown={props.dropDown}
        keepMounted
        open={Boolean(props.dropDown)}
        onClose={props.handleClose}
      >
        <MenuItem onClick={props.onClose}>Profile</MenuItem>
        <MenuItem onClick={props.onClose}>Settings</MenuItem>
        <MenuItem onClick={props.onClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
