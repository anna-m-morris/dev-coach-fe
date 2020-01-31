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

const Payment = props => {
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
  const getImage4 = () => (image4 ? 'minusIcon' : 'plusIcon');
  const getImage5 = () => (image5 ? 'minusIcon' : 'plusIcon');

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
            <p>How does our payment system work?</p>
            {<img src={icons[getImage1()]} alt='icon' />}
          </AskedQuestionDiv>
          {text1 && (
            <AnsweredQuestionDiv>
              <li>Devcoach will take care of the payments</li>
              <li>
                Students must pay upfront when scheduling an
                appointment
              </li>
              <li>
                We are the middleman between the students and the
                coaches
              </li>
              <li>
                Coaches only get paid if the interview happenend
              </li>
              <li>
                If an appointment doesn't happen, the student will get
                the money from DevCoach back
              </li>
              <li>
                Both the coach and student are required to prove that
                the interview happened
              </li>
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText2(display);
              showImage2(display);
            }}
          >
            <p>Which payments do you provide?</p>
            {<img src={icons[getImage2()]} alt='icon' />}
          </AskedQuestionDiv>
          {text2 && (
            <AnsweredQuestionDiv>
              Currently we provide:
              <li>Stripe</li>
              <li>Paypal</li>
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText3(display);
              showImage3(display);
            }}
          >
            <p>
              Is there a fixed amount to pay to be able to schedule an
              appoinment?
            </p>
            {<img src={icons[getImage3()]} alt='icon' />}
          </AskedQuestionDiv>
          {text3 && (
            <AnsweredQuestionDiv>
              There's no fixed amount, as prices differ according to
              the amount stated by the coach
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText4(display);
              showImage4(display);
            }}
          >
            <p>
              As a coach how many percentage of the payment made by a
              student do I get?
            </p>
            {<img src={icons[getImage4()]} alt='icon' />}
          </AskedQuestionDiv>
          {text4 && (
            <AnsweredQuestionDiv>
              You get 100% of the payments, $2 only gets deducted when
              a video chat is made
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText5(display);
              showImage5(display);
            }}
          >
            <p>
              If I scheduled an appointment but it didn't happen will
              I get my money back?
            </p>
            {<img src={icons[getImage5()]} alt='icon' />}
          </AskedQuestionDiv>
          {text5 && (
            <AnsweredQuestionDiv>
              Yes. You will get your money refunded, if a scheduled
              appointment could not take place but you must send an
              email to 'qualityhub@gmx.de' for verification
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
)(Payment);
