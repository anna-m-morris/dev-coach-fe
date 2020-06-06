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
          <div className='card-image'></div>
          <img
            className='profile-image'
            src={ben}
            alt='profile-pic'
          />
          <div className='info'>
            <h4 className='name'>Benjamin Grabow</h4>
            <p className='position'>Project Lead</p>
          </div>
          <div className='social-container'>
            <a
              target='blank'
              href='https://github.com/benjamingrabow'
            >
              <i className='fab fa-github-square'></i>
            </a>
            <a
              target='blank'
              href='https://www.linkedin.com/in/benjamin-grabow/'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
        <div className='about-card'>
          <div className='card-image'></div>
          <img
            className='profile-image'
            src={ola}
            alt='profile-pic'
          />
          <div className='info'>
            <h4 className='name'>Oladimeji Ojo</h4>
            <p className='position'>Full Stack Developer</p>
          </div>
          <div className='social-container'>
            <a target='blank' href='https://github.com/ojokure'>
              <i className='fab fa-github-square'></i>
            </a>
            <a
              target='blank'
              href='https://www.linkedin.com/in/oladimejiojo/'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
        <div className='about-card'>
          <div className='card-image'></div>
          <img
            className='profile-image'
            src={funmi}
            alt='profile-pic'
          />
          <div className='info'>
            <h4 className='name'>Olufunmilayo Talabi</h4>
            <p className='position'>Full Stack Developer</p>
          </div>
          <div className='social-container'>
            <a target='blank' href='https://github.com/funmi7'>
              <i className='fab fa-github-square'></i>
            </a>
            <a
              target='blank'
              href='https://www.linkedin.com/in/funmilayo-talabi/'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
        <div className='about-card'>
          <div className='card-image'></div>
          <img
            className='profile-image'
            src={jayne}
            alt='profile-pic'
          />
          <div className='info'>
            <h4 className='name'>Jayne Norrie</h4>
            <p className='position'>Full Stack Developer</p>
          </div>
          <div className='social-container'>
            <a target='blank' href='https://github.com/jaynecn'>
              <i className='fab fa-github-square'></i>
            </a>
            <a
              target='blank'
              href='https://www.linkedin.com/in/jaynecarmichaelnorrie/'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
        <div className='about-card'>
          <div className='card-image'></div>
          <img
            className='profile-image'
            src={dom}
            alt='profile-pic'
          />
          <div className='info'>
            <h4 className='name'>Dom Eccleston</h4>
            <p className='position'>Full Stack Developer</p>
          </div>
          <div className='social-container'>
            <a target='blank' href='https://github.com/domeccleston'>
              <i className='fab fa-github-square'></i>
            </a>
            <a
              target='blank'
              href='https://www.linkedin.com/in/dom-eccleston/'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
        <div className='about-card'>
          <div className='card-image'></div>
          <img className='profile-image' src={me} alt='profile-pic' />
          <div className='info'>
            <h4 className='name'>Liam Sutton</h4>
            <p className='position'>Full Stack Developer</p>
          </div>
          <div className='social-container'>
            <a target='blank' href='https://github.com/curm90'>
              <i className='fab fa-github-square'></i>
            </a>
            <a
              target='blank'
              href='https://www.linkedin.com/in/liam-sutton90/'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;