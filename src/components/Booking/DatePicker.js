import React from 'react';
import styled from 'styled-components';
import Calendar from 'antd/lib/calendar';
import 'antd/lib/calendar/style/index.css';
import 'antd/lib/select/style/index.css';
import 'antd/lib/radio/style/index.css';
import moment from 'moment';
import devices from '../../utils/devices';
import TimePicker from './TimePicker';

const StyledCalendar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: column;
  }

  .calender-container {
    padding: 1rem;
    border-radius: 6px;
    box-shadow: 0 6px 10px #d3d3d3;
  }

  .right {
    height: 24em;
    width: 24em;
    padding: 2em;
    text-align: center;
    border-radius: 6px;
    box-shadow: 0 6px 10px #d3d3d3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
      @media ${devices.mobile} {
        font-size: 1rem;
      }
    }
  }
`;

const DatePicker = props => {
  console.log(props);

  const mapTopic = id => {
    switch (id) {
      default:
        return '';
      case 1:
        return 'frontend';
      case 2:
        return 'backend';
      case 3:
        return 'algorithms & data structures';
      case 4:
        return 'behavioural';
      case 5:
        return 'system design';
      case 6:
        return 'React';
    }
  };

  const mapLength = id => {
    switch (id) {
      default:
        return '';
      case 1:
        return 'half hour';
      case 2:
        return 'one hour';
    }
  };

  return (
    <StyledCalendar className='appointment-container'>
      <div className='calender-container'>
        <Calendar
          className='calender'
          onSelect={date => props.saveDate(date._d)}
          fullscreen={false}
        />
      </div>
      <div className='right'>
        <TimePicker
          saveDate={date => props.saveDate(date)}
          date={props.date}
        />
        <h1>
          {props.date
            ? `Your ${mapLength(props.select.length_id)} ${mapTopic(
                props.select.topic_id,
              )} interview will take place on ${moment(
                props.date,
              ).format('MMMM Do YYYY, h:mm a')}.`
            : null}
        </h1>
      </div>
    </StyledCalendar>
  );
};

export default DatePicker;
