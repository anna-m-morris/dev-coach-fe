import React from 'react';
import styled from 'styled-components';
import { getFeedback } from '../../state/actions/feedbackActions';
import GiveRating from '../../components/DataVisualization/GiveRating';
import FeedbackInput from '../../components/Inputs/FeedbackInput';

const StyledGiveFeedback = styled.div``;

export default function GiveFeedback() {
  return (
    <StyledGiveFeedback>
      <GiveRating />
      <FeedbackInput />
    </StyledGiveFeedback>
  );
}
