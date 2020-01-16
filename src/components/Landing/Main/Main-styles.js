import styled from 'styled-components';
// import devices from '../../devices';

export const MainContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5rem 0 10rem 0;

  .main-about-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .main-about-title {
    color: #141414;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .main-about-intro {
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
    background: #292d38;
    width: 100%;
    margin: 10rem 0;

    h4 {
      font-size: 2rem;
      text-align: center;
      margin: 1rem 0;
      color: #efefef;
    }

    .about-cards {
      display: flex;
      justify-content: space-evenly;
      margin: 2rem 0;
      flex-wrap: wrap;
    }

    .about-card {
      border-radius: 6px;
      box-shadow: 0px 10px 10px #161616;
      background: #efefef;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 25rem;
      max-width: 25rem;

      .vector {
        width: 100%;
      }

      img {
        border-radius: 6px 6px 0 0;
        width: 100%;
        height: 12rem;
        object-fit: cover;
      }

      .card-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }

      h6 {
        margin-bottom: 1.6rem;
        font-weight: bold;
        font-size: 1.6rem;
      }

      p {
        font-size: 1rem;
        padding: 0 2.2rem;
        text-align: center;
        color: #545454;
        line-height: 1.3;
      }
    }
  }

  .user-stories-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-weight: bold;
      font-size: 2.2rem;
      margin-bottom: 5rem;
      width: 70%;
      text-align: center;
      line-height: 1.3;
      color: #141414;
    }

    .user-stories {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .user-story {
      margin: 1.3rem 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 28rem;

      p {
        line-height: 2;
        /* font-weight: bold; */
        font-size: 1.1rem;
        color: #545454;
      }
    }

    .user-header {
      width: 100%;
      display: flex;
      align-items: center;

      margin: 1rem 0;

      img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 1.2rem;
      }

      h3 {
        font-weight: bold;
        font-size: 1.4rem;
        color: #141414;
      }
    }
  }
`;
