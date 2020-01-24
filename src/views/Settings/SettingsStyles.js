import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .settings-title {
    margin-bottom: 2rem;
    color: #595959;
    font-size: 1.8rem;
    font-weight: 500;
  }

  .paper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem 2rem;
    background: white;
    border-radius: 6px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
    width: 22rem;
  }

  .image-container {
    width: 5rem;
    height: 5rem;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 1rem;

    span {
      outline: none;
    }

    .avatar-uploader {
      border-radius: 50%;
      cursor: pointer;
      transition: ease-out 0.3s;

      &:hover {
        transition: ease-in 0.3s;
        filter: brightness(60%);
      }
      &:active {
        outline: none;
      }
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
    width: 100%;
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
