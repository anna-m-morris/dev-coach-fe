import React from 'react';
import styled from 'styled-components';
import devices from './devices';


// STYLED COMPONENTS //
const BackgroundContainer = styled.div`
  height: 100vh;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid blue;

  @media ${devices.tablet} {
    border: 3px solid orange;
  }
  
  @media ${devices.mobile} {
    border: 3px solid green;
  }
`;

function Marketplace(props) {
  
  return (
    <BackgroundContainer>
      <h1>Hello I'm a Marketplace</h1>
    </BackgroundContainer>
  )
}

export default Marketplace;