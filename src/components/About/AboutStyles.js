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
  }

  .about-card {
    margin-bottom: 2rem;
    box-shadow: 4px 4px 4px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 3px;
    width: 22rem;
    background: #daefdf;
  }

  .card-image {
    width: 100%;
    height: 17rem;
    background: white;
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

  .name {
    color: #4fad65;
    font-size: 2.2rem;
    margin: 1rem 0;
  }

  .position {
    color: #655f69;
    font-size: 1.3rem;
    margin: 0;
  }
`;
