import React from 'react';
import { Logo } from '../Landing-styles';
import { FooterContainer } from './Footer-styles';

import github from '../../../img/github-1.png';
import facebook from '../../../img/facebook.png';
import linkdin from '../../../img/linkedin.png';
import twitter from '../../../img/twitter-1.png';
import instagram from '../../../img/instagram-logo-1.png';

const Footer = () => (
  <FooterContainer>
    <div className='footer-copyright'>
      <div>
        <Logo />
      </div>
      <div>
        <p>
          <span>©2020</span> Devcoach
        </p>
      </div>
    </div>
    <div className='footer-icons'>
      <div className='footer-icon'>
        <img src={github} alt='github' />
      </div>
      <div className='footer-icon'>
        <img src={facebook} alt='facebook' />
      </div>
      <div className='footer-icon'>
        <img src={twitter} alt='twitter' />
      </div>
      <div className='footer-icon'>
        <img src={linkdin} alt='linkdin' />
      </div>
      <div className='footer-icon'>
        <img src={instagram} alt='instagram' />
      </div>
    </div>
  </FooterContainer>
);

export default Footer;
