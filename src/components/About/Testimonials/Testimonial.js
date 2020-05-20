import React from 'react';
import TestimonialContainer from './TestimonialStyles';
import user1 from '../img/person-1.jpg';
import user2 from '../img/person-2.jpg';
import user3 from '../img/person-3.jpg';

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <h1>Customer Testimonials</h1>
      <div className={'CardsContainer'}>
        <div className={'Card'}>
          <div className={'User'}>
              <img className={'circle'} src={user1} alt={'Profile Img'}></img>
            
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
            
              <img className={'circle'} src={user2} alt={'Profile Img'}></img>
            
            <h3>Aaron Ruiz</h3>
          </div>
          <p>
            Practicing with DevCoach gave me the confidence I needed
            to have a fun coding interview and eventually get the
            offers I wanted. Believe it or not, this time I wasn't
            even nervous when the day came
          </p>
        </div>
        <div className={'Card'}>
          <div className={'User'}>
            <img
              className={'circle'}
              src={user3}
              alt={'Profile Img'}
            ></img>
            <h3>Jessica Booth</h3>
          </div>
          <p>
            DevCoach helped me to get an amazing hands-on technical
            interview experience. After some preparation, I decided to
            test my skills in algorithms, so I scheduled a couple of
            DevCoach interviews.
          </p>
        </div>
      </div>
    </TestimonialContainer>
  );
};

export default Testimonial;
