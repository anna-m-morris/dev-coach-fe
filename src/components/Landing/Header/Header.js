import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton, buttonTheme } from '../Landing-styles';
import { HeaderContainer } from './Header-styles';

const Header = () => (
  <HeaderContainer>
    <h2 className='cta-title'>
    Code, advice, interveiw practice? <br/>
    There's a mentor for that
    </h2>
    <div className='cta-button'>
      <Link className='link' to='/register'>
        <StyledButton theme={buttonTheme}>Sign Up</StyledButton>
      </Link>
    </div>
  </HeaderContainer>
);

export default Header;
