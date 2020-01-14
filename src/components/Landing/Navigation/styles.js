import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 11;

  .logo {
    display: flex;
    align-items: center;
    margin-left: 3.3rem;
  }

  .logo-name {
    color: #408f53;
    font-size: 2rem;
  }

  .list-items-container {
    margin: 0 2.6rem;
    width: 25%;

    ul {
      display: flex;
      justify-content: space-around;

      li a {
        text-decoration: none;
        color: white;
        transition: ease-in 0.1s;
        font-size: 1.1rem;

        &:hover {
          color: #408f53;
          padding-bottom: 0.3rem;
          border-bottom: 2px solid #408f53;
          transition: ease-in 0.1s;
        }
      }
    }
  }
`;
