import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logo } from '../Landing-styles';
import { NavContainer } from './NavigationStyles';

function Navigation({ user, isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <NavContainer className='navigation'>
        <div className='logo'>
          <Link to='/'>
            <Logo />
          </Link>
          <p className='logo-name'>DevCoach</p>
        </div>
        <div className='list-items-container'>
          <ul className='list-items'>
            <li className='list-item'>
              <Link to='/faq/general'>FAQ</Link>
            </li>
            <li className='list-item'>
              <Link to='/about'>About</Link>
            </li>
            <li className='list-item'>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </div>
      </NavContainer>
    );
  }

  return (
    <NavContainer className='navigation'>
      <div className='logo'>
        <Link to='/'>
          <Logo />
        </Link>
        <p className='logo-name'>DevCoach</p>
      </div>
      <div className='list-items-container'>
        <ul className='list-items'>
          <li className='list-item'>
            <Link to='/faq/general'>FAQ</Link>
          </li>
          <li className='list-item'>
            <Link to='/about'>About</Link>
          </li>
          <li className='list-item'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='list-item'>
            <Link to='/register'>Signup</Link>
          </li>
        </ul>
      </div>
    </NavContainer>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    isLoggedIn: state.userReducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Navigation);
