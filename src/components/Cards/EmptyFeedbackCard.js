import React from 'react';
import styled from 'styled-components';
import { Empty } from 'antd';
import devices from '../../utils/devices';

const StyledContainer = styled.div`
  width: 48rem;
  height: 100%;
  max-width: 100%;
  background: white;
  box-shadow: 0 6px 10px rgba(50, 50, 93, 0.1);
  padding: 40px;

  @media ${devices.tablet} {
    width: 80%;
    height: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: gray;
    font-size: 1.2rem;
  }

  .imgDiv {
    width: 50%;
    height: 50%;
    margin-left: 35%;
    padding-top: 30px;

    @media ${devices.tablet} {
      margin-left: 4%;
    }

    @media ${devices.mobile} {
      display: none;
    }
  }

  button {
    background: #4fad65;
    border: none;
    color: white;
    width: 31%;
    height: 3rem;
    border-radius: 0.4rem;
    cursor: pointer;
    margin-left: 35%;
    margin-top: 50px;

    .link {
      text-decoration: none;
      color: white;
    }
  }

  button:hover {
    background: #1e3f1f;
  }
`;

const EmptyFeedback = () => {
  return (
    <StyledContainer>
      <h3>You don't have any feedback.</h3>
      <div className='imgDiv'>
        <Empty description={false} />
      </div>
    </StyledContainer>
  );
};
export default EmptyFeedback;
