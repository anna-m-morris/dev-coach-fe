import React from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import { saveDate } from '../../state/actions/appointmentActions';
import TimePicker from './TimePicker';

const DatePicker = props => {
  return (
    <div>
      {props.timePicker ? (
        <TimePicker
          saveDayTime={date => props.saveDate(date)}
          date={props.date}
        />
      ) : (
        <Calendar
          onChange={date => props.saveDate(date)}
          value={new Date()}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    timePicker: state.appointmentsReducer.timePicker,
    date: state.appointmentsReducer.date,
  };
};

export default connect(mapStateToProps, { saveDate })(DatePicker);
