import styled from 'styled-components';
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import logo from './firelogo.png';

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
  border-bottom: 1px solid #d6d6d6;
`;

const LogoTitleContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;
`;

const TitleContainer = styled.div`
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
`;

const buttonTheme = {
    text: 'white',
    background: '#4fad65',
};

const invertTheme = ({ text, background }) => ({
    text: background,
    background: text,
  });

const NavbarButton = styled.button`
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

const Landing = () => {
  return (
    <NavbarContainer>
      <LogoTitleContainer>
        <Logo />
        <TitleContainer>
          <h1>DevCoach</h1>
        </TitleContainer>
      </LogoTitleContainer>
      <LinksContainer>
        <NavbarLink>FAQ</NavbarLink>
        <NavbarLink>About</NavbarLink>
        <NavbarButton theme={buttonTheme}>LOGIN</NavbarButton>
        <NavbarButton theme={invertTheme}>SIGN UP</NavbarButton>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Landing;
