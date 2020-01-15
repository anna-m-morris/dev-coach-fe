import React from 'react';
import styled from 'styled-components';
import FeedbackModal from '../Modals/FeedbackModal';

const CardContainer = styled.div`
  max-width: 28rem;
  background: white;
  border-radius: 4px;
  box-shadow: 2px 4px 6px #d3d3d3;
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;

  .title {
    font-size: 1.2rem;
  }

  .feedback {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 3rem 0;
    padding: 0 2rem;

    .feedback-text-container {
      margin-left: 2rem;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem 0 1rem;
    width: 95%;
    border-top: 1px solid #eaeaea;

    .footer-text {
      color: #a8a8a8;
      font-weight: 500;
    }
  }
`;

const FeedbackCard = ({
  rating,
  feedback,
  date,
  coachFirstName,
  coachLastName,
  topic,
}) => {
  return (
    <CardContainer>
      <div className='title-container'>
        <h4 className='title'>{topic}</h4>
      </div>
      <div className='feedback'>
        <div className='rating'>{rating}</div>
        <div className='feedback-text-container'>
          <p className='feedback-text'>{feedback.slice(0, 65)}...</p>
          <FeedbackModal
            coachFirstName={coachFirstName}
            coachLastName={coachLastName}
            feedback={feedback}
          />
        </div>
      </div>

      <div className='footer'>
        <div className='coach-info'>
          <p className='footer-text'>
            {coachFirstName} {coachLastName}
          </p>
        </div>
        <div>
          <p className='date footer-text'>{date}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default FeedbackCard;
