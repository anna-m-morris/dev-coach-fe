import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;

  .main-about-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  h2 {
    color: #141414;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  p {
    text-align: center;
    font-size: 1.6rem;
    line-height: 1.3;
    color: #545454;
    font-weight: bold;
    max-width: 60rem;
  }

  .logo {
    color: #408f53;
  }

  .main-about-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #408f53;
    width: 100%;
    height: 50rem;
    margin: 5rem 0;

    h4 {
      font-size: 2rem;
      text-align: center;
      margin: 1rem 0;
      color: white;
    }

    .about-cards {
      display: flex;
      justify-content: space-evenly;
      margin: 2rem 0;
      flex-wrap: wrap;
    }

    .about-card {
      border-radius: 4px;
      box-shadow: 0px 6px 10px #545454;
      background: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 25rem;
      max-width: 20rem;

      .vector {
        width: 8rem;
      }

      img {
        width: 100%;
      }

      .card-info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h6 {
        margin-bottom: 1.6rem;
        font-weight: bold;
        font-size: 1.6rem;
      }

      p {
        font-size: 1rem;
        padding: 0 0.6rem;
      }
    }
  }
`;
