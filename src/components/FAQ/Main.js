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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  h2 {
    margin: 0;
    color: #595959;
    font-size: 2rem;
    font-weight: 500;

    @media ${devices.tablet} {
      font-size: 2rem;
    }
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
  

  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 20rem;
  }

  @media ${devices.mobile} {
    width: 100%;
  }

  .styledBox {
    width: 12rem;
    border-radius: 1rem;
    height: 150px;
    margin: 0 3rem;
    border-width: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
    background: white;
    transition: ease-out 0.1s;

    @media ${devices.tablet} {
      height: 5rem;
      width: 23rem;
    }

    @media ${devices.mobile} {
      width: 90%;
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

      @media ${devices.tablet} {
        flex-direction: row-reverse;
      }

      @media ${devices.mobile} {
        flex-direction: row-reverse;
      }
    }

    h3 {
      color: #4fad65;
    }

    .icon {
      font-size: 3.5rem;
      color: #4fad65;
    }
  }

  .activeClassNav {
    background: #4fad65;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transition: ease-out 0.1s;

    &:hover {
      box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
      transition: ease-in 0.1s;
    }

    h3,
    .icon {
      color: white;
    }
  }
`;

const MainFaq = () => {
  return (
    <MainContainer>
      <h2>FAQ</h2>
      <CategoryContainer className='category-container'>
        <NavLink
          className='styledBox'
          activeClassName='activeClassNav'
          to='/faq/general'
        >
          <div className='link-content'>
            <h3>General</h3>
            <SearchIcon className='icon' />
          </div>
        </NavLink>

        <NavLink
          className='styledBox'
          activeClassName='activeClassNav'
          to='/faq/profile'
        >
          <div className='link-content'>
            <h3>Profile</h3>
            <PersonIcon className='icon' />
          </div>
        </NavLink>
        <NavLink
          className='styledBox'
          activeClassName='activeClassNav'
          to='/faq/payment'
        >
          <div className='link-content'>
            <h3>Payment</h3>
            <PaymentIcon className='icon' />
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
