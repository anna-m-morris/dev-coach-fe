import styled from 'styled-components';
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import logo from '../img/firelogo.png';

const vector2 = require('../img/landingvector.png');
const bgShape = require('../img/Rectangle5.png');
const handshakeVector = require('../img/Group.png');
const feedbackVector = require('../img/analytics1.png');
const hiredVetor = require('../img/startup1.png');
const getStartedVector = require('../img/getstartedVector.png');
const facebookIcon = require('../img/facebook.png');
const githubIcon = require('../img/github.png');
const instagramIcon = require('../img/instagram.png');
const linkedInIcon = require('../img/linkedIn.png');
const twitterIcon = require('../img/twitter.png');

// styled components
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

const TopLandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const LandingTaglineContainer = styled.div`
  height: 100%;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 100%;
    font-size: 40px;
    margin-left: 4em;
    padding-top: 1em;
  }

  h3 {
    width: 80%;
    font-size: 32px;
    font-weight: normal;
  }
`;

const SignupContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;

  input {
    height: 2em;
    width: 70%;
    font-family: Ubuntu, sans-serif;
    border-radius: 4px;
    border: 1px solid #c8c8c8;
    padding: 0.5em;
    font-size: 16px;
    color: #808080;

    :focus {
      outline: none;
    }
  }

  button {
    margin-left: 1em;
    width: 10em;
    height: 3.5em;
  }
`;

const LandingRightContainer = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: center;
`;

const LandingVectorImageContainer = styled.div`
  z-index: 10;

  img {
    height: 40em;
    width: 40em;
  }
`;

// middle section
const MiddleSectionContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const BgShape = styled.div`
  height: 100%;
  margin: 20px;
  background-image: url(${bgShape});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  h2 {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    color: white;
    padding-top: 160px;
    font-size: 32px;
    text-align: center;
  }
`;

const SquaresContainer = styled.div`
  display: flex;
`;

const SquareLeft = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  height: 270px;
  width: 28%;
  background: #ffffff;
  border: 1px solid #a3a3a3;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  h3 {
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
  }

  p {
    margin-left: 40px;
    margin-right: 40px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 15px;
    text-align: center;
  }
`;

const ImgDiv = styled.div`
  margin-left: 20%;
  height: 30%;
  width: 75%;

  img {
    height: 100%;
    width: 80%;
  }
`;
const SquareRight = styled.div`
  margin-top: 40px;
  margin-left: 60px;
  height: 270px;
  width: 28%;
  background: #ffffff;
  border: 1px solid #a3a3a3;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  h3 {
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
  }

  p {
    margin-left: 40px;
    margin-right: 40px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 15px;
    text-align: center;
  }
`;
const OtherImgDiv = styled.div`
  margin-left: 28%;
  height: 30%;
  width: 60%;

  img {
    height: 100%;
    width: 70%;
  }
`;

// bottom section
const BottomSectionContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const BottomImgDiv = styled.div`
  width: 50%;

  img {
    height: 90%;
    width: 90%;
  }
`;

const BottomTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;

  h2 {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 33px;
    line-height: 46px;
    width: 12em;
    text-align: center;
  }

  input {
    height: 3em;
    width: 100%;
    background: #ffffff;
    border: 1px solid #ada8a8;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    padding-left: 1em;
  }
`;

const BottomButton = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 1.5em;
  width: 95%;
  padding: 1em;
  border: none;
  font-family: Ubuntu;
  font-size: 14px;
  margin-top: 2em;
  text-align: center;
  vertical-align: middle;

  :focus {
    outline: none;
  }

  :active {
    outline: none;
    transform: translateY(2px);
  }
`;

// footer
const FooterConatiner = styled.div`
  height: 50vh;
  width: 100%;
  background: #292d38;

  p {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
  }
`;

const FooterTopSection = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const LogoFooter = styled.div`
  margin-top: 1.5%;
  margin-left: 10%;
  height: 10em;
  width: 5em;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;

const LogoTitleContainerFooter = styled.div`
  margin-top: 5%;
  width: 30%;
  display: flex;
  justify-content: flex-start;
`;

const FooterTextStyle = styled.div`
  margin-top: 2%;

  h3 {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }

  p {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
`;

const FooterBottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icons = styled.div`
  margin-right: 1.5%;
  height: 1.6em;

  img {
    max-height: 100%;
  }
`;

// react components

const SignUp = () => {
  return (
    <SignupContainer>
      <input />
      <StyledButton theme={buttonTheme}>Get Started</StyledButton>
    </SignupContainer>
  );
};

const Landing = () => {
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
      <TopLandingContainer>
        <LandingTaglineContainer>
          <h1>
            INTERVIEWING ISN'T EASY. THAT DOESN'T MEANT IT HAS TO BE
            STRESSFUL.
          </h1>
          <h3>
            We connect developers looking to improve their
            interviewing technique with experienced pros who have
            mastered the technical interview and can coach you through
            the process from start to finish.
          </h3>
          <SignUp />
        </LandingTaglineContainer>
        <LandingRightContainer>
          <LandingVectorImageContainer>
            <img src={vector2} alt='vector' />
          </LandingVectorImageContainer>
        </LandingRightContainer>
      </TopLandingContainer>
      <MiddleSectionContainer>
        <BgShape>
          <h2>Say goodbye to second guessing</h2>
          <SquaresContainer>
            <SquareLeft>
              <h3>Find your coach.</h3>
              <p>
                Match with an experienced professional, hand-selected
                by us for interviewing experience and mentoring
                ability.
              </p>
              <ImgDiv>
                <img src={handshakeVector} alt='vector' />
              </ImgDiv>
            </SquareLeft>
            <SquareRight>
              <h3>Get feedback.</h3>
              <p>
                Get targeted feedback on your own individual strengths
                and weaknesses, and a personalized plan to improve.
              </p>
              <OtherImgDiv>
                <img src={feedbackVector} alt='vector' />
              </OtherImgDiv>
            </SquareRight>
            <SquareRight>
              <h3>Get hired!</h3>
              <p>
                Take advantage of your newfound interview skills and
                land the job of your dreams.
              </p>
              <OtherImgDiv>
                <img src={hiredVetor} alt='vector' />
              </OtherImgDiv>
            </SquareRight>
          </SquaresContainer>
        </BgShape>
      </MiddleSectionContainer>
      <BottomSectionContainer>
        <BottomImgDiv>
          <img src={getStartedVector} />
        </BottomImgDiv>
        <BottomTextStyle>
          <h2>Ready to get started?</h2>
          <input placeholder='Enter your email address' />
          <BottomButton theme={buttonTheme}>Get Started</BottomButton>
        </BottomTextStyle>
      </BottomSectionContainer>
      <FooterConatiner>
        <FooterTopSection>
          <LogoTitleContainerFooter>
            <LogoFooter />
            <NavTitleContainer>
              <h1>DevCoach</h1>
            </NavTitleContainer>
          </LogoTitleContainerFooter>
          <FooterTextStyle>
            <h3>SUPPORT</h3>
            <p>How it works</p>
          </FooterTextStyle>
          <FooterTextStyle>
            <h3>PRODUCT</h3>
            <p>Product feedback</p>
            <p>About the team</p>
          </FooterTextStyle>
          <FooterTextStyle>
            <h3>HELP</h3>
            <p>FAQ</p>
            <p>Contact us</p>
            <p>Career</p>
          </FooterTextStyle>
          <FooterTextStyle>
            <h3>LEGAL</h3>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Manage Cookies</p>
          </FooterTextStyle>
        </FooterTopSection>
        <FooterBottomSection>
          <Icons>
            <img src={githubIcon} />
          </Icons>
          <Icons>
            <img src={facebookIcon} />
          </Icons>
          <Icons>
            <img src={instagramIcon} />
          </Icons>
          <Icons>
            <img src={linkedInIcon} />
          </Icons>
          <Icons>
            <img src={twitterIcon} />
          </Icons>
        </FooterBottomSection>
        <p>
          {' '}
          hello@dev-coach.com - copyright © Devcoach 2019. All rights
          reserved.
        </p>
      </FooterConatiner>
    </div>
  );
};

export default Landing;
