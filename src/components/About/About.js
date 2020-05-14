import React from 'react';
import Navigation from '../Landing/Navigation/Navigation';
import Search from './Search/Search';
import How from './How/How';
import AboutContainer from './AboutStyles';

const About = () => {
  return (
    <AboutContainer>
      <Navigation />
      <Search />
      <How />
    </AboutContainer>
  );
};

export default About;
