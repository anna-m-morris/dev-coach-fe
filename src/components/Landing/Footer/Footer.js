import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton, buttonTheme } from '../Landing-styles';
import { FooterContainer } from './Footer-styles';

const Footer = () => (
  <FooterContainer className='footer-container'>
    <div className='footer-top'>
      <div className='cta-message'>
        <h2>What are you waiting for?</h2>
      </div>
      <div className='cta-button'>
        <Link to='/register'>
          <StyledButton theme={buttonTheme}>Join Now</StyledButton>
        </Link>
      </div>
    </div>
    <div className='footer-bottom'>
      <div className='footer-content footer-copyright'>
        <p>Copyright © 2020 DevCoach</p>
      </div>
      <div className='footer-content footer-icons'>
        <div className='footer-icon'>
          <i class='fab fa-github'></i>
        </div>
        <div className='footer-icon'>
          <i class='fab fa-facebook'></i>
        </div>
        <div className='footer-icon'>
          <i class='fab fa-twitter-square'></i>
        </div>
        <div className='footer-icon'>
          <i class='fab fa-linkedin'></i>
        </div>
        <div className='footer-icon'>
          <i class='fab fa-instagram'></i>
        </div>
      </div>
      <div className='footer-content footer-tribute'>
        <p>Designed by Labs EU3</p>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;
