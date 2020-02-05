import React from 'react';
import Navigation from '../Landing/Navigation/Navigation';
import AboutContainer from './AboutStyles';

const About = () => {
  return (
    <AboutContainer className='about-container'>
      <Navigation />
      <div className='title'>
        <h1>Meet The Team</h1>
      </div>
      <div className='about-cards-container'>
        <div className='about-card'>
          <img src='' alt='' />
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
