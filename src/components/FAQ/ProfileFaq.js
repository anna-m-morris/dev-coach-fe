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
import settings from '../../img/faq.png';

const icons = { plusIcon, minusIcon };

const Profile = props => {
  const {
    text1,
    text2,
    text3,
    image1,
    image2,
    image3,
    showText1,
    showText2,
    showText3,
    showImage1,
    showImage2,
    showImage3,
  } = props;

  const getImage1 = () => (image1 ? 'plusIcon' : 'minusIcon');
  const getImage2 = () => (image2 ? 'plusIcon' : 'minusIcon');
  const getImage3 = () => (image3 ? 'plusIcon' : 'minusIcon');

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
            <p>How do I update my profile?</p>
            {<img src={icons[getImage1()]} alt='icon' />}
          </AskedQuestionDiv>
          {text1 && (
            <AnsweredQuestionDiv>
              <li>Click in the right top corner on the user icon</li>
              <li>Choose Settings</li>
              <li>Update your profile</li>
              <img
                className='settings'
                src={settings}
                alt='settings description'
              />
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText2(display);
              showImage2(display);
            }}
          >
            <p>Is it compulsory to have a picture?</p>
            {<img src={icons[getImage2()]} alt='icon' />}
          </AskedQuestionDiv>
          {text2 && (
            <AnsweredQuestionDiv>
              It is not required to upload a picture. We definitely
              recommend it for coaches, to get more attention on the
              marketplace.
            </AnsweredQuestionDiv>
          )}
          <AskedQuestionDiv
            onClick={display => {
              showText3(display);
              showImage3(display);
            }}
          >
            <p>
              If I registered as a student before, can I register as a
              coach?
            </p>
            {<img src={icons[getImage3()]} alt='icon' />}
          </AskedQuestionDiv>
          {text3 && (
            <AnsweredQuestionDiv>
              Yes, you can sign up as a coach, but you would have to
              use another email for the registration
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
)(Profile);
