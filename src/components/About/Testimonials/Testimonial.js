import React from 'react';
import TestimonialContainer from './TestimonialStyles';

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <h1>Customer Testimonials</h1>
      <div className={'CardsContainer'}>
        <div className={'Card'}>
          <div className={'User'}>
            <div className={'circle'}>
              <img src={'#'} alt={'Profile Img'}></img>
            </div>
            <h3>John Davidson</h3>
          </div>
          <p>
            DevCoach definitely played a role in my performance.
            Nothing beats mock coding interveiws. I still remember my
            first coding interveiw a few years back...
          </p>
        </div>
        <div className={'Card'}>
          <div className={'User'}>
            <div className={'circle'}>
              <img src={'#'} alt={'Profile Img'}></img>
            </div>
            <h3>Anna Morris</h3>
          </div>
          <p>It's good stuff.</p>
        </div>
        <div className={'Card'}>
          <div className={'User'}>
            <div className={'circle'}>
              <img src={'#'} alt={'Profile Img'}></img>
            </div>
            <h3>Anna Morris</h3>
          </div>
          <p>It's good stuff.</p>
        </div>
      </div>
    </TestimonialContainer>
  );
};

export default Testimonial;
