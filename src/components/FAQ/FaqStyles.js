import styled from 'styled-components';
import devices from '../../utils/devices';

export const BodyDiv = styled.div`
  height: 60vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FAQContainer = styled.div`
  margin: 0 auto;
  max-width: 100%;
`;

export const AskedQuestionDiv = styled.div`
  margin-bottom: 20px;
  max-width: 100%;
  width: 49rem;
  border-color: #d2d4dc;
  border-radius: 10px;
  height: 50px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 4rem;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media ${devices.tablet} {
    width: 25rem;
  }

  @media ${devices.mobile} {
    width: 17rem;
  }
  p {
    font-size: 19px;
    font-weight: 600;
    width: 38em;
  }

  img {
    height: 30%;
  }
`;

export const AnsweredQuestionDiv = styled.div`
  margin-left: 5%;
  margin-top: 20px;
  font-style: italic;
  font-size: 16px;
  width: 45em;
  margin-bottom: 20px;

  .settings {
    width: 100%;
    height: 20rem;
  }
`;
