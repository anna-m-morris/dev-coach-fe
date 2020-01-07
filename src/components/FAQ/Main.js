import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
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

    h3 {
      color: white;
    }
  }
`;

const iconStyles = {
  fontSize: '3.5em',
  color: '#4fad65',
};

const activeIconStyles = {
  fontSize: '3.5em',
  color: 'white',
};

// const IconStyle = styled(SearchIcon)`
//   /* font-Size: 3.5em; */
//   color: #4fad65;
// `;

const MainFaq = () => {
  return (
    <MainContainer>
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
    </MainContainer>
  );
};

export default MainFaq;
