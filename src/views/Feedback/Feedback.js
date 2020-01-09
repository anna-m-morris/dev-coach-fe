import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FeedbackRating from '../../components/DataVisualization/Rating';

const StyledFeedback = styled.div``;

const Feedback = props => {
  React.useEffect(() => {
    props.getFeedback(props.user.id, props.user.role_id);
  });
  return (
    <StyledFeedback>
      <FeedbackRating
        rating={props.feedback && props.feedback.rating}
      />
    </StyledFeedback>
  );
};

const mapStateToProps = state => {
  return {
    feedback: state.feedbackReducer.feedback,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(Feedback);
