import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  .form-card-container {
    background: white;
    margin-top: 8rem;
    height: 35em;
    width: 25em;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;

    .message-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #4fad65;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      padding: 2rem 0;
      margin-bottom: 2rem;
    }

    .form-title {
      color: white;
      margin: 0;
    }
  }

  .form-container {
    height: 100%;
    width: 100%;

    .form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 1rem 2rem;
    }

    div {
      margin: 0.5rem 0;
    }

    .input-container {
      width: 100%;
      height: 4rem;
    }

    .form-input {
      border: none;
      background: #f4f4f4;
      border-radius: 2rem;
      width: 92%;
      padding: 1rem 1rem;
      font-size: 1rem;
      outline: none;
      transition: ease-out 0.1s;

      &:hover {
        transition: ease-in 0.1s;
        box-shadow: 0 2px 4px #d3d3d3;
      }
    }

    .error {
      padding: 0;
      margin: 0;
      color: red;
      font-size: 0.8rem;
    }

    .options-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
      margin: 0;
    }

    .remember-me {
      display: flex;
      align-items: center;

      p {
        margin-left: 0.3rem;
        color: #6d6d6d;
      }
    }

    .forgot-password {
      text-decoration: none;
      color: #4fad65;
      transition: ease-out 0.2s;

      &:hover {
        color: #1e3f1f;
        transition: ease-in 0.2s;
      }
    }

    .form-button-container {
      width: 100%;
      .form-button {
        width: 100%;
        border-radius: 2rem;
      }
    }
  }

  .alternate-form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 0.8rem;
      color: #6d6d6d;
    }

    a {
      text-decoration: none;
      color: #4fad65;
      transition: ease-out 0.2s;

      &:hover {
        color: #1e3f1f;
        transition: ease-in 0.2s;
      }
    }
  }
`;

export const loadingButtonTheme = {
  text: '#292d38',
  background: 'lightgray',
};
