import React from 'react';
import { connect } from 'react-redux';
import {
  BodyDiv,
  FAQContainer,
  AskedQuestionDiv,
  AnsweredQuestionDiv,
} from './FaqStyles';
import * as actionCreators from '../../state/actions/faqActions';

import plusIcon from '../../img/plus-icon.svg';
import minusIcon from '../../img/minus-icon.svg';

const icons = { plusIcon, minusIcon };

const General = props => {
  const {
    text1,
    text2,
    text3,
    text4,
    text5,
    image1,
    image2,
    image3,
    image4,
    image5,
    showText1,
    showText2,
    showText3,
    showText4,
    showText5,
    showImage1,
    showImage2,
    showImage3,
    showImage4,
    showImage5,
  } = props;

  const getImage1 = () => (image1 ? 'plusIcon' : 'minusIcon');
  const getImage2 = () => (image2 ? 'plusIcon' : 'minusIcon');
  const getImage3 = () => (image3 ? 'plusIcon' : 'minusIcon');
  const getImage4 = () => (image4 ? 'plusIcon' : 'minusIcon');
  const getImage5 = () => (image5 ? 'plusIcon' : 'minusIcon');
  return (
    <div>
      <BodyDiv>
        <FAQContainer>
          <AskedQuestionDiv
            onClick={display => {
              showText1(display);
              showImage1(display);
            }}
          >
            <p>What is DevCoach?</p>
            {<img src={icons[getImage1()]} alt='icon' />}
          </AskedQuestionDiv>
          {text1 && (
            <AnsweredQuestionDiv>
              DevCoach is a large network of experienced professionals
              ready to help improve your skills and further your career. We
              give you get access to coaches who can advise and prepare you for technical 
              and professional situations such as "white-board" interveiws.
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText2(display);
              showImage2(display);
            }}
          >
            <p>How does it work?</p>
            {<img src={icons[getImage2()]} alt='icon' />}
          </AskedQuestionDiv>
          {text2 && (
            <AnsweredQuestionDiv>
              <li>Choose a skill you want to improve</li>
              <li>Connect with real professionals</li>
              <li>Learn and practice</li>
              <li>Become career ready</li>
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText3(display);
              showImage3(display);
            }}
          >
            <p>Why do I need to signup?</p>
            {<img src={icons[getImage3()]} alt='icon' />}
          </AskedQuestionDiv>
          {text3 && (
            <AnsweredQuestionDiv>
              Whether you want to become a coach or student, you need
              to signup so you can access the great features DevCoach
              has to offer.
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText4(display);
              showImage4(display);
            }}
          >
            <p>
              What if I scheduled an appointment but can't make it?
            </p>
            {<img src={icons[getImage4()]} alt='icon' />}
          </AskedQuestionDiv>
          {text4 && (
            <AnsweredQuestionDiv>
              You can click on "cancel" on your scheduled appointments
              in your dashboard, which will direct you to booking
              another appointment at a time more convenient for you.
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText5(display);
              showImage5(display);
            }}
          >
            <p>
              What is the duration of an appointment with a coach?
            </p>
            {<img src={icons[getImage5()]} alt='icon' />}
          </AskedQuestionDiv>
          {text5 && (
            <AnsweredQuestionDiv>
              Each appointment can either last 30 minutes or an hour. After that you will have to book a new session to continue.
            </AnsweredQuestionDiv>
          )}
        </FAQContainer>
      </BodyDiv>
    </div>
  );
};

export default connect(
  state => state.faqReducers,
  actionCreators,
)(General);
