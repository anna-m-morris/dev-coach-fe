import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 2rem;
  }

  .paper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem;
    background: white;
    border-radius: 6px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .image-container {
    width: 5rem;
    height: 5rem;
    opacity: 0.7;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 1rem;

    .avatar-uploader {
      border-radius: 50%;
      cursor: pointer;
      outline: none;
    }

    .picture {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .form {
    width: 22rem;
    margin-top: 5px;
  }

  .button {
    display: flex;
    justify-content: space-between;
    button {
      width: 48%;
      background-color: #4fad65;
      padding: 0.5rem;
      font-size: 1rem;
      border-radius: 4px;
      border: none;
      margin-top: 17px;
      color: #ffff;
      font-weight: 500;
      cursor: pointer;
      transition: ease-out 0.2s;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

      &:hover {
        transition: ease-in 0.2s;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
        opacity: 0.9;
      }
    }
  }
`;
