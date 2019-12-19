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
  color: #459a59;
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
  font-family: Ubuntu;
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
            <a href='#'>FAQ</a>
          </NavbarLink>
          <NavbarLink>
            <a href='#'>About</a>
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
            <img src={vector2} />
          </LandingVectorImageContainer>
        </LandingRightContainer>
      </TopLandingContainer>
    </div>
  );
};

export default Landing;
