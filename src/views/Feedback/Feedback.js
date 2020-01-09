import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Rating from '../../components/DataVisualization/Rating';

const StyledFeedback = styled.div``;

const Feedback = () => {
  return (
    <StyledFeedback>
      <Rating />
    </StyledFeedback>
  );
};

const mapStateToProps = state => {
  return {
    feedback: state.feedbackReducer.feedback,
  };
};

export default connect(mapStateToProps)(Feedback);
