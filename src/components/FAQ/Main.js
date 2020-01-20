import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';
import General from './GeneralFaq';
import Profile from './ProfileFaq';
import Payment from './PaymentFaq';

// Main content
const MainContainer = styled.div`
  background: #f6f9fc;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 50px;
    font-family: 'Ubuntu', sans-serif;
    color: #4fad65;
    font-size: 40px;
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
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);

    .link-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h3 {
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
      <h2>FAQs</h2>
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
