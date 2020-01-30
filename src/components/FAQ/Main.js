import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';
import General from './GeneralFaq';
import Profile from './ProfileFaq';
import Payment from './PaymentFaq';
import devices from '../../utils/devices';

// Main content
const MainContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5em;
  margin: 0 auto;

  h2 {
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    color: #4fad65;
    font-size: 3rem;

    @media ${devices.tablet} {
      font-size: 2rem;
    }
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media ${devices.mobile} {
    flex-direction: column;
    margin-bottom: 10vh;
    margin-top: 10px;
  }

  .styledBox {
    border-radius: 1rem;
    padding: 3rem 5rem;
    margin: 3rem;
    border-width: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
    background: white;
    transition: ease-out 0.1s;

    @media ${devices.tablet} {
      border-radius: 0.5rem;
      padding: 1.5rem 2.5rem;
      margin: 1rem;
      border-width: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media ${devices.mobile} {
      width: 17.5rem;
      border-radius: 0.5rem;
      padding: 0.75rem 1.25rem;
      margin: 0.25rem;
      border-width: 0.25rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &:hover {
      box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.15);
      transition: ease-in 0.1s;
    }

    .link-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media ${devices.mobile} {
        flex-direction: row-reverse;
      }
    }

    h3 {
      color: grey;
    }
  }

  .activeClassNav {
    background: #1e3f1f;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transition: ease-out 0.1s;

    &:hover {
      box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
      transition: ease-in 0.1s;
    }

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
      <h2>FAQ</h2>
      <CategoryContainer>
        <NavLink
          className='styledBox'
          activeClassName='activeClassNav'
          to='/faq/general'
        >
          <div className='link-content'>
            <h3>General</h3>
            <SearchIcon style={iconStyles} />
          </div>
        </NavLink>

        <NavLink
          className='styledBox'
          activeClassName='activeClassNav'
          to='/faq/profile'
        >
          <div className='link-content'>
            <h3>Profile</h3>
            <PersonIcon style={iconStyles} />
          </div>
        </NavLink>
        <NavLink
          className='styledBox'
          activeClassName='activeClassNav'
          to='/faq/payment'
        >
          <div className='link-content'>
            <h3>Payment</h3>
            <PaymentIcon style={iconStyles} />
          </div>
        </NavLink>
      </CategoryContainer>

      <Route exact path='/faq/general' component={General} />
      <Route exact path='/faq/profile' component={Profile} />
      <Route exact path='/faq/payment' component={Payment} />
    </MainContainer>
  );
};

export default MainFaq;
