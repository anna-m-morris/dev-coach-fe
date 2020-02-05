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
          <img src={ben} alt='profile-pic' />
          <div className='info'>
            <h4 className='name'>Benjamin Grabow</h4>
            <p className='postition'>Full Stack Developer</p>
          </div>
        </div>
        <div className='about-card'>
          <img src={ola} alt='profile-pic' />
          <div className='info'>
            <h4 className='name'>Oladimeji Ojo</h4>
            <p className='postition'>Full Stack Developer</p>
          </div>
        </div>
        <div className='about-card'>
          <img src={funmi} alt='profile-pic' />
          <div className='info'>
            <h4 className='name'>Olufunmilayo Talabi</h4>
            <p className='postition'>Full Stack Developer</p>
          </div>
        </div>
        <div className='about-card'>
          <img src={jayne} alt='profile-pic' />
          <div className='info'>
            <h4 className='name'>Jayne Carmichael Norrie</h4>
            <p className='postition'>Full Stack Developer</p>
          </div>
        </div>
        <div className='about-card'>
          <img src={dom} alt='profile-pic' />
          <div className='info'>
            <h4 className='name'>Dom Eccleston</h4>
            <p className='postition'>Full Stack Developer</p>
          </div>
        </div>
        <div className='about-card'>
          <img src={me} alt='profile-pic' />
          <div className='info'>
            <h4 className='name'>Liam Sutton</h4>
            <p className='postition'>Full Stack Developer</p>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
