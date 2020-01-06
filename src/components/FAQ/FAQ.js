import React, { useState } from 'react';
import styled from 'styled-components';

import logo from '../../img/firelogo.png';
import plusIcon from '../../img/plus-icon.svg';
import minusIcon from '../../img/minus-icon.svg';

const Logo = styled.div`
  height: 10em;
  width: 5em;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;
const NavbarContainer = styled.div`
  height: 5em;
  width: 100vw;
  background: white;
  display: flex;
  justify-content: space-between;
`;

const LogoTitleContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;
`;

const NavTitleContainer = styled.div`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  color: grey;
  font-size: 18px;
`;

const LinksContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavbarLink = styled.div`
  font-family: Ubuntu;
  font-size: 18px;
  color: black;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const buttonTheme = {
  text: 'white',
  background: '#4fad65',
};

export const invertTheme = {
  text: '#4fad65',
  background: 'white',
};

export const StyledButton = styled.button`
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 4em;
  width: 8em;
  padding: 1em;
  border: none;
  font-family: ABeeZee;
  font-size: 14px;

  :focus {
    outline: none;
  }

  :active {
    outline: none;
    transform: translateY(2px);
  }
`;

const BodyDiv = styled.div`
  background: #f6f9fc;
  margin-top: 0px;
  box-sizing: border-box;
  height: 100%;
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
      <NavbarContainer>
        <LogoTitleContainer>
          <Logo />
          <NavTitleContainer>
            <h1>DevCoach</h1>
          </NavTitleContainer>
        </LogoTitleContainer>
        <LinksContainer>
          <NavbarLink>
            <a href='/faq'>FAQ</a>
          </NavbarLink>
          <NavbarLink>
            <a href='/about'>About</a>
          </NavbarLink>
          <a href='/login'>
            <StyledButton theme={buttonTheme}>LOGIN</StyledButton>
          </a>
          <a href='/register'>
            <StyledButton theme={invertTheme}>SIGN UP</StyledButton>
          </a>
        </LinksContainer>
      </NavbarContainer>
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
