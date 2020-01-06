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
`;

const FAQContainer = styled.div`
  margin: 0 auto;
  width: 1000px;
  max-width: 100%;
  background-color: #f6f9fc;
`;

const HeadSection = styled.div`
  margin-top: 40px;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
`;

const GeneralQuestionsDiv = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: flex-start;

  h3 {
    font-size: 26px;

    div {
      left: 0;
      height: 4px;
      width: 54px;
      background-color: #4fad65;
    }
  }
`;

const QuestionContent = styled.div``;

const AskedQuestionDiv = styled.div`
  margin-left: 20%;
  width: 20em;
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
    margin-left: 12em;
    height: 30%;
  }
`;

const AnsweredQuestionDiv = styled.div`
  margin-left: 25%;
  margin-top: 20px;
  font-style: italic;
  font-size: 16px;
`;

const icons = { plusIcon, minusIcon };

const Questions = () => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [image, setImage] = useState(true);

  const getImage = () => (image ? 'plusIcon' : 'minusIcon');

  return (
    <div>
      <BodyDiv>
        <FAQContainer>
          <HeadSection>
            <h2>Frequently Asked Questions On DevCoach</h2>
          </HeadSection>
          <GeneralQuestionsDiv>
            <h3>
              General
              <div></div>
            </h3>
            <QuestionContent>
              <AskedQuestionDiv
                onClick={() => {
                  setShowText1(!showText1);
                  setImage(!image);
                }}
              >
                <p>What is DevCoach?</p>
                {<img src={icons[getImage()]} />}
              </AskedQuestionDiv>
              {showText1 && (
                <AnsweredQuestionDiv>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nulla id tristique magna, et gravida nibh.
                  Phasellus tempus sem a mi consectetur, ac ultricies
                  mauris condimentum. Duis nec metus ante. Morbi
                  feugiat mauris non lectus sodales sodales. Proin eu
                  auctor elit, facilisis tincidunt velit. Sed in
                  lectus non urna varius eleifend ac ut ligula. In
                  eleifend at mi in molestie.
                </AnsweredQuestionDiv>
              )}
            </QuestionContent>
          </GeneralQuestionsDiv>
          <QuestionContent>
            <AskedQuestionDiv
              onClick={() => {
                setShowText2(!showText2);
                setImage(!image);
              }}
            >
              <p>What is DevCoach?</p>
              {<img src={icons[getImage()]} />}
            </AskedQuestionDiv>
            {showText2 && (
              <AnsweredQuestionDiv>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nulla id tristique magna, et gravida nibh.
                Phasellus tempus sem a mi consectetur, ac ultricies
                mauris condimentum. Duis nec metus ante. Morbi feugiat
                mauris non lectus sodales sodales. Proin eu auctor
                elit, facilisis tincidunt velit. Sed in lectus non
                urna varius eleifend ac ut ligula. In eleifend at mi
                in molestie.
              </AnsweredQuestionDiv>
            )}
          </QuestionContent>
        </FAQContainer>
      </BodyDiv>
    </div>
  );
};

export default Questions;
