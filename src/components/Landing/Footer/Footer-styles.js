import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 15rem;
  background: #292d38;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    color: white;
  }

  .footer-copyright {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      color: #818082;
    }

    div {
      margin: 0 auto;
    }
  }

  .footer-icons {
    display: flex;
    justify-content: space-evenly;
    width: 30%;

    .footer-icon {
      img {
        width: 25px;
        height: 25px;
        color: white;
      }
    }
  }
`;
