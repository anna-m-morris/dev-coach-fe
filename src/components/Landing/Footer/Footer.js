import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton, buttonTheme } from '../Landing-styles';
import { FooterContainer } from './Footer-styles';

const Footer = () => (
  <FooterContainer className='footer-container'>
    <div className='footer-bottom'>
      <div className='footer-content footer-copyright'>
        <p>Copyright © 2020 DevCoach</p>
      </div>
      <div className='footer-content footer-icons'>
        <div className='footer-icon'>
          <i className='fab fa-github'></i>
        </div>
        <div className='footer-icon'>
          <i className='fab fa-facebook'></i>
        </div>
        <div className='footer-icon'>
          <i className='fab fa-twitter-square'></i>
        </div>
        <div className='footer-icon'>
          <i className='fab fa-linkedin'></i>
        </div>
        <div className='footer-icon'>
          <i className='fab fa-instagram'></i>
        </div>
      </div>
      <div className='footer-content footer-tribute'>
        <Link to="/team"> <p>Labs PT10</p> </Link>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;
