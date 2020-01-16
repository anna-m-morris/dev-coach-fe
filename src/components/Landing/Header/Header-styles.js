import styled from 'styled-components';
import devices from '../../devices';

export const HeaderContainer = styled.div`
  position: absolute;
  top: 20rem;
  max-width: 50rem;
  margin-left: 4.3rem;

  @media ${devices.tablet} {
    top: 16rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
    color: white;
    width: 100%;
  }

  .cta-button {
    width: 15rem;
    margin-top: 2rem;
  }
`;
