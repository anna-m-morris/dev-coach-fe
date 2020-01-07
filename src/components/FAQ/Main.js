import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled, { css } from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';
import logo from '../../img/firelogo.png';
import General from './GeneralFaq';
import Profile from './ProfileFaq';
import Payment from './PaymentFaq';

// Nav Bar
const mobileHidden = css`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const NavbarContainer = styled.div`
  height: 4em;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 11;
  box-shadow: 0px 3px 4px -2px rgba(150, 150, 150, 1);

  @media only screen and (max-width: 600px) {
    justify-content: space-evenly;
  }
`;

const Logo = styled.div`
  width: 4.5em;
  height: 5em;
  background-image: url(${logo});
  background-repeat: no-repeat;
  transform: scale(0.7);
  ${mobileHidden};
`;

const LogoTitleContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavTitleContainer = styled.div`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: normal;
  color: grey;
  font-size: 18px;

  .navLink {
    text-decoration: none;
    color: grey;
  }
`;

const LinksContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 0.2em;
`;

const NavbarLink = styled.div`
  font-family: Ubuntu;
  font-size: 14px;
  color: black;
  ${mobileHidden};

  a {
    text-decoration: none;
    color: black;
  }
`;

export const buttonTheme = {
  text: 'white',
  background: '#408f53',
};

export const invertTheme = {
  text: '#4fad65',
  background: 'white',
};

// Main content

const MainContainer = styled.div`
  background: #f6f9fc;
  height: 150vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 50px;
    font-family: 'Ubuntu', sans-serif;
    color: #4fad65;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  .styledBox {
    width: 12em;
    border-radius: 10px;
    height: 150px;
    margin: 3em;
    border-width: 10px;
    border: 2px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    h3 {
      text-align: center;
      color: grey;
    }
  }

  .activeClassNav {
    background: #1e3f1f;
    border: 2px solid white;

    h3 {
      color: white;
    }
  }
`;

const iconStyles = {
  fontSize: '3.5em',
  color: '#4fad65',
};

const MainFaq = () => {
  return (
    <MainContainer>
      <NavbarContainer>
        <LogoTitleContainer>
          <NavLink to='/'>
            <Logo />
          </NavLink>
          <NavTitleContainer>
            <NavLink className='navLink' to='/'>
              <h1>DevCoach</h1>
            </NavLink>
          </NavTitleContainer>
        </LogoTitleContainer>
        <LinksContainer>
          <NavbarLink>
            <a href='/dashboard'>DashBoard</a>
          </NavbarLink>
          <NavbarLink>
            <a href='/faq/general'>FAQ</a>
          </NavbarLink>
          <NavbarLink>
            <a href='#'>About</a>
          </NavbarLink>
          <NavbarLink>
            <a href='#'>Logout</a>
          </NavbarLink>
        </LinksContainer>
      </NavbarContainer>
      <h2>FAQ's</h2>
      <CategoryContainer>
        <NavLink
          className='styledBox'
          activeClassName='activeClassNav'
          to='/faq/general'
        >
          <h3>General</h3>
          <SearchIcon style={iconStyles} />
        </NavLink>

        <NavLink
          className='styledBox'
          activeClassName='activeClassNav'
          to='/faq/profile'
        >
          <h3>Profile</h3>
          <PersonIcon style={iconStyles} />
        </NavLink>
        <NavLink
          className='styledBox'
          activeClassName='activeClassNav'
          to='/faq/payment'
        >
          <h3>Payment</h3>
          <PaymentIcon style={iconStyles} />
        </NavLink>
      </CategoryContainer>

      <Route exact path='/faq/general' component={General} />
      <Route exact path='/faq/profile' component={Profile} />
      <Route exact path='/faq/payment' component={Payment} />
    </MainContainer>
  );
};

export default MainFaq;
