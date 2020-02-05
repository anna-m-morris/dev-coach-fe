import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { StyledButton, buttonTheme } from '../Landing/Landing-styles';
import { saveRoleId } from '../../state/actions/authenticationActions';

const StyledUserType = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 100%;

  .users-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: 2rem 0 4rem 0;
  }

  .user-type-container {
    align-items: center;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 6px 8px #d3d3d3;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    width: 40%;
    padding: 1rem;
  }

  .user-description {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;

    ul {
      margin: 0;
      padding: 0;

      li {
        list-style: none;
        padding: 1rem 0;
        text-align: center;
        color: #808080;
      }
    }
    h3 {
      font-size: 1.4rem;
      color: #141414;
    }
  }
`;

const UserTypePage = ({ userReducer, saveRoleId, handleNext }) => {
  return (
    <StyledUserType>
      <div className='users-container'>
        <div className='user-type-container'>
          <div className='user-description'>
            <h3>As A Coach</h3>
            <ul>
              <li>
                Set your own <b>income</b>
              </li>
              <li>
                <b>Coach</b> beginner developers through the technical
                interview
              </li>
              <li>
                Help <b>grow</b> this community
              </li>
            </ul>
          </div>
          <div className='user-decision'>
            <StyledButton
              theme={buttonTheme}
              onClick={() => saveRoleId(handleNext, 2)}
            >
              Join As Coach
            </StyledButton>
          </div>
        </div>
        <div className='user-type-container'>
          <div className='user-description'>
            <h3>As A Student</h3>
            <ul>
              <li>
                <b>Master</b> the technical interview
              </li>
              <li>
                Feel <b>confident</b> in the online interview setting
              </li>
              <li>
                Land your <b>dream</b> job and get dat moneyyssss
              </li>
            </ul>
          </div>
          <div className='user-decision'>
            <StyledButton
              theme={buttonTheme}
              onClick={() => saveRoleId(handleNext, 1)}
            >
              Join As Student
            </StyledButton>
          </div>
        </div>
      </div>
    </StyledUserType>
  );
};

export default connect(state => state, { saveRoleId })(UserTypePage);
