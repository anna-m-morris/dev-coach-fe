import React from 'react';
import styled from 'styled-components';
import Navigation from '../Landing/Navigation/Navigation';
import MainFaq from './Main';

const LandingFaqContainer = styled.div`
  .navigation {
    width: 100%;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;

    .list-items .list-item a {
      color: #9b9b9b;

      &:hover {
        opacity: none;
      }
    }
  }
`;

const LandingFaq = () => {
  return (
    <LandingFaqContainer className='container'>
      <Navigation />
      <MainFaq />
    </LandingFaqContainer>
  );
};

export default LandingFaq;
