import React from 'react';
import Navigation from '../Landing/Navigation/Navigation';
import AboutContainer from './AboutStyles';
import ben from './img/ben.jpeg';
import ola from './img/ola.jpeg';
import jayne from './img/jayne.jpeg';
import dom from './img/dom.jpeg';
import funmi from './img/funmi.jpeg';
import me from './img/me.jpg';

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
