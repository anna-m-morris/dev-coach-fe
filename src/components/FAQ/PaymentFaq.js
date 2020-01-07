import React, { useState } from 'react';
import {
  BodyDiv,
  FAQContainer,
  AskedQuestionDiv,
  AnsweredQuestionDiv,
} from './FaqStyles';

import plusIcon from '../../img/plus-icon.svg';
import minusIcon from '../../img/minus-icon.svg';

const icons = { plusIcon, minusIcon };

const Payment = () => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [image1, setImage1] = useState(true);
  const [image2, setImage2] = useState(true);

  const getImage1 = () => (image1 ? 'plusIcon' : 'minusIcon');
  const getImage2 = () => (image2 ? 'plusIcon' : 'minusIcon');

  return (
    <div>
      <BodyDiv>
        <FAQContainer>
          <AskedQuestionDiv
            onClick={() => {
              setShowText1(!showText1);
              setImage1(!image1);
            }}
          >
            <p>How do I update my profile?</p>
            {<img src={icons[getImage1()]} />}
          </AskedQuestionDiv>
          {showText1 && (
            <AnsweredQuestionDiv>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla id tristique magna, et gravida nibh. Phasellus
              tempus sem a mi consectetur, ac ultricies mauris
              condimentum. Duis nec metus ante. Morbi feugiat mauris
              non lectus sodales sodales. Proin eu auctor elit,
              facilisis tincidunt velit. Sed in lectus non urna varius
              eleifend ac ut ligula. In eleifend at mi in molestie.
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={() => {
              setShowText2(!showText2);
              setImage2(!image2);
            }}
          >
            <p>Is it compulsory to have a picture?</p>
            {<img src={icons[getImage2()]} />}
          </AskedQuestionDiv>
          {showText2 && (
            <AnsweredQuestionDiv>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla id tristique magna, et gravida nibh. Phasellus
              tempus sem a mi consectetur, ac ultricies mauris
              condimentum. Duis nec metus ante. Morbi feugiat mauris
              non lectus sodales sodales. Proin eu auctor elit,
              facilisis tincidunt velit. Sed in lectus non urna varius
              eleifend ac ut ligula. In eleifend at mi in molestie.
            </AnsweredQuestionDiv>
          )}
        </FAQContainer>
      </BodyDiv>
    </div>
  );
};

export default Payment;
