import React, { Component } from 'react';
import Calendar from 'react-calendar';
import TimePicker from './TimePicker';

export default class MyApp extends Component {
  state = {
    date: new Date(),
    timePicker: false,
  };

  onChange = date => {
    this.setState({ date, timePicker: true, });
    console.log(date);
  };

  render() {
    return (
      <div>
        {this.state.timePicker ? <TimePicker /> : <Calendar onChange={this.onChange} value={this.state.date} />}
      </div>
    );
  }
}
