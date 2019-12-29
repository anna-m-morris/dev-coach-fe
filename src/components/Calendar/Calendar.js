import React from 'react';
import { connect } from 'react-redux';
import { saveDate, saveDayTime } from '../../state/actions/appointmentActions';
import Calendar from 'react-calendar';
import TimePicker from './TimePicker';
import Select from './Select';

// We need topic_id, coach_id, student_id, date, length, 

const DatePicker = props => {
  return (
    <div>
      <Select/>
      {/* {props.timePicker ? <TimePicker saveDayTime={date => props.saveDayTime(date)} date={props.date} /> : <Calendar onChange={date => props.saveDate(date)} value={new Date()} />} */}
    </div >
  );
}

const mapStateToProps = state => {
  return {
    timePicker: state.appointmentsReducer.timePicker,
    date: state.appointmentsReducer.date,
  }
};

export default connect(mapStateToProps, { saveDate, saveDayTime })(DatePicker)