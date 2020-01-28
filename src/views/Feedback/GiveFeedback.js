import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  giveFeedback,
  saveRating,
  saveFeedback,
} from '../../state/actions/feedbackActions';
import {
  showInfoMessage,
  closeMessage,
} from '../../state/actions/notificationActions';
import Notification from '../../components/Notifications/Notification';
import GiveRating from '../../components/DataVisualization/GiveRating';
import FeedbackInput from '../../components/Inputs/FeedbackInput';

const StyledGiveFeedback = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.6rem;
  }

  .rating-button-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 1rem;
  }

  .button {
    background-color: #4fad65;
    font-weight: 200;
    width: 8rem;
    margin-top: 1.2rem;
  }
`;

function GiveFeedback(props) {
  const {
    feedback,
    rating,
    idRole,
    saveFeedback,
    saveRating,
    giveFeedback,
    info,
    closeMessage,
    showInfoMessage,
  } = props;

  return (
    <StyledGiveFeedback className='give-feedback-container'>
      <Notification
        onClose={closeMessage}
        variant='warning'
        message='Please fill out your review.'
        open={info}
      />
      <h1>Add Your Review</h1>
      <FeedbackInput saveFeedback={saveFeedback} />
      <div className='rating-button-container'>
        <GiveRating saveRating={saveRating} />
        <Button
          onClick={() =>
            feedback
              ? giveFeedback({ ...idRole, rating, feedback }, props)
              : showInfoMessage()
          }
          className='button'
          variant='contained'
          color='primary'
        >
          Submit
        </Button>
      </div>
    </StyledGiveFeedback>
  );
}

const mapStateToProps = state => {
  return {
    coaches: state.marketplaceReducer.coaches,
    feedback: state.feedbackReducer.giveFeedback,
    rating: state.feedbackReducer.rating,
    idRole: state.feedbackReducer.idRole,
    user: state.userReducer.user,
    info: state.notificationsReducer.info,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    giveFeedback,
    saveRating,
    saveFeedback,
    showInfoMessage,
    closeMessage,
  })(GiveFeedback),
);
