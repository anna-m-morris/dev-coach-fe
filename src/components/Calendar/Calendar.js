import React from 'react';
import { connect } from 'react-redux';
import { saveDate, saveDayTime } from '../../state/actions/appointmentActions';
import Calendar from 'react-calendar';
import TimePicker from './TimePicker';

const DatePicker = props => {
  return (
    <div>
      {props.timePicker ? <TimePicker saveDayTime={date => props.saveDayTime(date)} date={props.date} /> : <Calendar onChange={date => props.saveDate(date)} value={new Date()} />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    timePicker: state.appointmentsReducer.timePicker,
    date: state.appointmentsReducer.date,
  }
};

export default connect(mapStateToProps, { saveDate, saveDayTime })(DatePicker)