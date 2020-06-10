import React from 'react';
import Navigation from '../Landing/Navigation/Navigation';
import Search from './Search/Search';
import How from './How/How';
import Testimonials from './Testimonials/Testimonial';
import AboutContainer from './AboutStyles';
import Footer from '../Landing/Footer/Footer';

const About = () => {
  return (
    <div>
      <AboutContainer className={'aboutContainer'}>
        <Navigation />
        <Search />
        <How />
        <Testimonials />
      </AboutContainer>
      <Footer />
    </div>
  );
};

export default About;