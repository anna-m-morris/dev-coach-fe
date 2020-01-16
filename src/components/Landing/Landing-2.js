import React from 'react';
import { HeadingContainer } from './Landing-styles';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import mainImage from './img/landing-1.jpg';

const Landing = () => (
  <div className='app'>
    <HeadingContainer>
      <Navigation />
      <div className='landing-image'>
        <img src={mainImage} alt='main' />
        <Header />
      </div>
    </HeadingContainer>
    <Main />
    <Footer />
  </div>
);

export default Landing;
