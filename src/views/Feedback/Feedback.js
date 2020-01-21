import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';
import Loader from 'react-loader-spinner';
import { getFeedback } from '../../state/actions/feedbackActions';
import FeedbackRating from '../../components/DataVisualization/Rating';
import FeedbackCard from '../../components/Cards/FeedbackCard';
import EmptyFeedback from '../../components/Cards/EmptyFeedbackCard';

const StyledFeedback = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;

const LoaderStyled = styled.div`
  margin-left: 35rem;
  margin-top: 30vh;
`;

const Feedback = ({ user, getFeedback, feedback }) => {
  useEffect(() => {
    getFeedback(user.id, user.role_id);
  }, [getFeedback, user]);

  return (
    <div>
      {feedback && feedback ? (
        <StyledFeedback className='feedback-card-container'>
          {feedback && feedback.length ? (
            feedback.map(feedback => (
              <FeedbackCard
                key={uuid()}
                rating={<FeedbackRating rating={feedback.rating} />}
                feedback={feedback.feedback}
                topic={feedback.appointment_topic}
                date={feedback.appointment_datetime.slice(0, 15)}
                coachFirstName={feedback.first_name}
                coachLastName={feedback.last_name}
                avatarUrl={feedback.avatar_url}
              />
            ))
          ) : (
            <EmptyFeedback />
          )}
        </StyledFeedback>
      ) : (
        <LoaderStyled>
          <Loader
            type='TailSpin'
            color='#2BAD60'
            height='80'
            width='80'
          />
        </LoaderStyled>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    feedback: state.feedbackReducer.feedback,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, { getFeedback })(Feedback);
