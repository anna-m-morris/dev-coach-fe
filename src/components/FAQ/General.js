import React, { useState } from 'react';
import styled from 'styled-components';

import plusIcon from '../../img/plus-icon.svg';
import minusIcon from '../../img/minus-icon.svg';

const BodyDiv = styled.div`
  background: #f6f9fc;
  height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FAQContainer = styled.div`
  margin: 0 auto;
  /* width: 1000px; */
  max-width: 100%;
  background-color: #f6f9fc;
`;

const AskedQuestionDiv = styled.div`
  margin-bottom: 20px;
  max-width: 100%;
  width: 32em;
  border-color: #d2d4dc;
  border-radius: 10px;
  height: 50px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 24px;
  box-shadow: 0 6px 10px rgba(50, 50, 93, 0.1);
  transition: box-shadow 0.2s;
  border-left: 4px solid #4fad65;
  display: flex;
  align-items: center;

  p {
    font-size: 19px;
    font-weight: 600;
  }

  img {
    margin-left: 24em;
    height: 30%;
  }
`;

const AnsweredQuestionDiv = styled.div`
  margin-left: 5%;
  margin-top: 20px;
  font-style: italic;
  font-size: 16px;
  width: 45em;
  margin-bottom: 20px;
`;

const icons = { plusIcon, minusIcon };

const General = () => {
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
            <p>What is DevCoach?</p>
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
            <p>How does it work?</p>
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

export default General;
