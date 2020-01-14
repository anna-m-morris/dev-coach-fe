import React from 'react';
import { MainContainer } from './Main-styles';

import vector1 from '../../../img/handshake.png';
import analytics from '../../../img/analytics-1.png';
import startup from '../../../img/startup-1.png';

const Main = () => (
  <MainContainer>
    <div className='main-about-top'>
      <h2>
        Enhance your skills. Land your dream job.
        <span className='logo'> DevCoach</span>
      </h2>
      <p>
        We connect developers looking to improve their interviewing
        technique with experienced pros who have mastered the
        technical interview and can coach you through the process from
        start to finish.
      </p>
    </div>

    <div className='main-about-bottom'>
      <h4>How does DevCoach work?</h4>
      <div className='about-cards'>
        <div className='about-card'>
          <div className='vector'>
            <img src={vector1} alt='hand shake´' />
          </div>
          <div className='card-info'>
            <h6>Find Your Coach</h6>
            <p>
              Match with experienced professionals tailored to you
            </p>
          </div>
        </div>
        <div className='about-card'>
          <div className='vector'>
            <img src={analytics} alt='analytics´' />
          </div>
          <div className='card-info'>
            <h6>Enhance Your Skills</h6>
            <p>Practice mock interviews one on one with your coach</p>
          </div>
        </div>
        <div className='about-card'>
          <div className='vector'>
            <img src={startup} alt='analytics´' />
          </div>
          <div className='card-info'>
            <h6>Get Hired</h6>
            <p>Ace the real interview and land that dream job</p>
          </div>
        </div>
      </div>
    </div>
  </MainContainer>
);

export default Main;
