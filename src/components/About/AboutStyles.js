import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .navigation {
    width: 100%;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;

    .list-items .list-item a {
      color: #9b9b9b;

      &:hover {
        opacity: none;
      }
    }
  }

  .title {
    color: #4fad65;
    font-size: 1.8rem;

    h1 {
      margin: 0;
      margin-bottom: 2.5rem;
    }
  }

  .about-cards-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1280px;
  }

  .about-card {
    margin-bottom: 2rem;
    box-shadow: 0 4px 12px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 6px;
    width: 22rem;
    background: #daefdf;
  }

  .card-image {
    width: 100%;
    height: 17rem;
    background: #4fad65;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 49%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 49%, 0% 100%);
  }

  .profile-image {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    object-fit: cover;
    margin-top: -10rem;
    z-index: 1000;
    border: 1rem solid #daefdf;
  }

  .info {
    margin: 1rem 0 3rem 0;
  }

  .name {
    color: #4f5450;
    font-size: 2.2rem;
    margin: 1rem 0;
  }

  .position {
    color: #655f69;
    font-size: 1.5rem;
    margin: 0;
  }

  .contact {
    color: #4fad65;
    /* padding: 0.8rem 2.5rem; */
    text-decoration: none;
    /* color: white; */
    margin: 2rem 0;
    /* border-radius: 2rem; */
    font-size: 1.6rem;
    font-weight: bold;
  }

  .social-container {
    width: 10rem;
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 0;
  }

  .fab {
    font-size: 2.6rem;
    color: #4f5450;
  }

  .fa-github-square {
  }
`;
