import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledFeedback = styled.div``;

const Feedback = () => {
  return <StyledFeedback></StyledFeedback>;
};

const mapStateToProps = state => {
  return {
    feedback: state.feedbackReducer.feedback,
  };
};

export default connect(mapStateToProps)(Feedback);
