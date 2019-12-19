import React from 'react';
import styled from 'styled-components';

// RESPONSIVE SETTINGS //

// STYLED COMPONENTS //
const BackgroundContainer = styled.div`
  height: 100vh;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Marketplace(props) {
  
  return (
    <BackgroundContainer>
      <h1>Hello I'm a Marketplace</h1>
    </BackgroundContainer>
  )
}

export default Marketplace;