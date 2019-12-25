import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import TimePicker from './TimePicker';

const DatePicker = props => {
   state = {
    date: new Date(),
    timePicker: false,
  };

  onChange = date => {
    this.setState({ date, timePicker: true, });
    console.log(date);
  };

    return (
      <div>
        {this.state.timePicker ? <TimePicker /> : <Calendar onChange={this.onChange} value={this.state.date} />}
      </div>
    );
}

const mapStateToProps = state => {
  return {

  }
};

export default connect(mapStateToProps, {})(DatePicker)