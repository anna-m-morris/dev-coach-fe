import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';
import General from './General';

const MainContainer = styled.div`
  background: #f6f9fc;
  height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: 'Ubuntu', sans-serif;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  .link {
    margin-top: 10px;
    text-decoration: none;

    .activeFaqPage {
      background-color: grey;
    }

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

      h3 {
        text-align: center;
        color: grey;
      }
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
      <h2>FAQ's</h2>
      <CategoryContainer>
        <NavLink
          activeClassName='activeFaqPage'
          className='link'
          to='faq/general'
        >
          <div className='styledBox'>
            <h3>General</h3>
            <SearchIcon style={iconStyles} />
          </div>
        </NavLink>
        <NavLink className='link' to='faq/profile'>
          <div className='styledBox'>
            <h3>Profile</h3>
            <PersonIcon style={iconStyles} />
          </div>
        </NavLink>
        <NavLink className='link' to='faq/payment'>
          <div className='styledBox'>
            <h3>Payment</h3>
            <PaymentIcon style={iconStyles} />
          </div>
        </NavLink>
      </CategoryContainer>

      <Route exact path='/faq/general' component={General} />
    </MainContainer>
  );
};

export default MainFaq;
