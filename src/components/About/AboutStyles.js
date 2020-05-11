import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 20%;
  max-width: 880px;

  .navigation {
    width: 100%;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);
    margin-bottom: 3rem;

    .list-items .list-item a {
      color: seaGreen;

      &:hover {
        opacity: none;
      }
    }
  }

  .title {
    color: seaGreen;
    font-size: 1.6rem;
    // align-self: center;

    h1 {
      margin-top:0
      margin-bottom: 3.5rem;
    }
  }

  .about-cards-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: start;
    margin-bottom: 2.5rem;
  }

  .about-card {
    margin: 0 1rem 3.5rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    text-align: start;
    margin-left: 0rem;
    justify-content: space-between;
    width: 100%;

    p {
      margin-top: 0rem;
      width: 25rem;
    }
  }

  .card-image {
    width: 50%;
    height: 17rem;
    background: seaGreen;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);
  }
`;
