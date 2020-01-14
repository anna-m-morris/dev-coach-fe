import React from 'react';
import { LandingContainer } from './Landing-styles';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import mainImage from '../../img/main-image.jpg';
// import vector2 from '../img/landingvector.png';
// import greenBackgroundSVG from '../img/green-slanted-bg-shape.png';
// import handshakeImg from '../img/handshake.png';
// import analytics from '../img/analytics-1.png';
// import startup from '../img/startup-1.png';
// import getStartedVector from '../img/getstartedvector.png';
// import facebookIcon from '../img/fb.png';
// import githubIcon from '../img/github-1.png';
// import instagramIcon from '../img/instagram-logo-1.png';
// import linkedInIcon from '../img/linkedin.png';
// import twitterIcon from '../img/twitter-1.png';

const Landing = () => (
  <div className='app'>
    <LandingContainer>
      <Navigation />
      <div className='landing-image'>
        <img src={mainImage} alt='main' />
        <Header />
      </div>
    </LandingContainer>
    <Main />
    <Footer />
  </div>
);

export default Landing;
