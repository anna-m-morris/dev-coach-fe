import React from 'react';
import { MainContainer } from './Main-styles';

import aboutOne from './img/how-it-works-1.jpg';
import aboutTwo from './img/how-it-works-2.jpg';
import aboutThree from './img/how-it-works-3.jpg';
import personOne from './img/person-1.jpg';
import personTwo from './img/person-2.jpg';
import personThree from './img/person-3.jpg';

const Main = () => (
  <MainContainer>
    <div className='main-about-top'>
      <h2 className='main-about-title'>
        Enhance your skills. Land your dream job.
        <span className='logo'> DevCoach</span>
      </h2>
      <p className='main-about-intro'>
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
            <img src={aboutOne} alt='hand shake´' />
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
            <img src={aboutTwo} alt='analytics´' />
          </div>
          <div className='card-info'>
            <h6>Enhance Your Skills</h6>
            <p>Practice mock interviews one on one with your coach</p>
          </div>
        </div>
        <div className='about-card'>
          <div className='vector'>
            <img src={aboutThree} alt='analytics´' />
          </div>
          <div className='card-info'>
            <h6>Get Hired</h6>
            <p>Ace the real interview and land that dream job</p>
          </div>
        </div>
      </div>
    </div>

    <div className='user-stories-container'>
      <h2 className='user-stories-title'>
        Hear more about how DevCoach helped students master the
        technical interview and land their dream job
      </h2>

      <div className='user-stories'>
        <div className='user-story'>
          <div className='user-header'>
            <img src={personOne} alt='user' />
            <h3>Benjamin Grabow</h3>
          </div>
          <p>
            If you want a great coach to help you, InterviewQ is your
            best bet. My coach took me to another level in helping me
            with the interview. I would definitely recommend to check
            out QualityHub!
          </p>
        </div>
        <div className='user-story'>
          <div className='user-header'>
            <img src={personTwo} alt='user' />
            <h3>Benjamin Grabow</h3>
          </div>
          <p>
            If you want a great coach to help you, InterviewQ is your
            best bet. My coach took me to another level in helping me
            with the interview. I would definitely recommend to check
            out QualityHub!
          </p>
        </div>
        <div className='user-story'>
          <div className='user-header'>
            <img src={personThree} alt='user' />
            <h3>Benjamin Grabow</h3>
          </div>
          <p>
            If you want a great coach to help you, InterviewQ is your
            best bet. My coach took me to another level in helping me
            with the interview. I would definitely recommend to check
            out QualityHub!
          </p>
        </div>
      </div>
    </div>
  </MainContainer>
);

export default Main;
