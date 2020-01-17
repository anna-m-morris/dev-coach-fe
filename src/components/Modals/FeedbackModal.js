import React, { useState } from 'react';
import { Divider } from '@material-ui/core';
import Modal from 'antd/lib/modal';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Rating from '../DataVisualization/Rating';
import devices from '../devices';

const ModalContainer = styled.div`
  .open-modal-text {
    color: #4fad65;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

const FeedbackModal = props => {
  const {
    date,
    coachFirstName,
    coachLastName,
    feedback,
    avatarUrl,
    topic,
    rating,
  } = props;
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  return (
    <ModalContainer className='modal-container'>
      <p className='open-modal-text' onClick={showModal}>
        Read full review
      </p>
      <Modal
        title={topic}
        visible={visible}
        onCancel={handleCancel}
        zIndex={10000}
        footer={null}
      >
        <div className='modal-feedback-container'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              justifyContent: 'space-around',
            }}
          >
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
            >{`${coachFirstName} ${coachLastName}`}</p>
            <Avatar
              style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '50%',
              }}
              alt='Coach'
              src={avatarUrl}
            />
          </div>

          <div className='feedback-container'>
            <p
              style={{ margin: '1.5rem 0', textAlign: 'center' }}
              className='feedback-text'
            >
              {feedback}
            </p>
          </div>
          <Divider />
          <div
            className='rating'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '1rem 0 0 0',
            }}
          >
            <Rating rating={rating.props.rating} />
            <p style={{ margin: 0, color: '#a8a8a8' }}>{date}</p>
          </div>
        </div>
      </Modal>
    </ModalContainer>
  );
};

export default FeedbackModal;
