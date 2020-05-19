import React from 'react';
import Navigation from '../Landing/Navigation/Navigation';
import Search from './Search/Search';
import How from './How/How';
import Testimonials from "./Testimonials/Testimonial"
import Pricing from "./Pricing/Pricing"
import AboutContainer from './AboutStyles';


const About = () => {
  return (
    <AboutContainer className={"aboutContainer"}>
      <Navigation />
      <Search />
      <How />
      <Testimonials />
      <Pricing></Pricing>
    </AboutContainer>
  );
};

export default About;
