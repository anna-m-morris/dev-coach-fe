import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const StyledSpinner = styled.div`
  /* border: 5px solid #f3f3f3;
  border-top: 5px solid #16d47b;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } */
  margin-left: 50%;
`;

const LoaderSpinner = () => {
  return (
    <StyledSpinner
    // style={{
    //   width: '100%',
    //   height: '100',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   marginLeft: '35%',
    // }}
    >
      <Loader
        type='ThreeDots'
        color='#2BAD60'
        height='100'
        width='100'
      />
    </StyledSpinner>
  );
};

export default LoaderSpinner;
