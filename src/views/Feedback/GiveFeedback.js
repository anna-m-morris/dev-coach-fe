import React from 'react';
import styled from 'styled-components';
// import { getFeedback } from '../../state/actions/feedbackActions';
import Button from '@material-ui/core/Button';
import GiveRating from '../../components/DataVisualization/GiveRating';
import FeedbackInput from '../../components/Inputs/FeedbackInput';

const StyledGiveFeedback = styled.div`
  .button {
    background-color: #4fad65;
    font-weight: 200;
  }
`;

export default function GiveFeedback() {
  return (
    <StyledGiveFeedback>
      <GiveRating />
      <FeedbackInput />
      <Button className='button' variant='contained' color='primary'>
        Submit
      </Button>
    </StyledGiveFeedback>
  );
}
