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

  @media only screen and (max-width: 1200px) {
    width: 40rem;
  }

  @media ${devices.tablet} {
    width: 25rem;
  }

  @media ${devices.mobile} {
    width: 17rem;
    padding: 5px 10px;
  }
  p {
    font-size: 1.19rem;
    font-weight: 600;
    width: 38em;
    color: #474b4f;

    @media ${devices.tablet} {
      font-size: 1rem;
    }
    @media ${devices.mobile} {
      font-size: 0.8rem;
    }
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
  width: 45rem;
  margin-bottom: 20px;

  @media only screen and (max-width: 1200px) {
    width: 38rem;
  }

  @media ${devices.tablet} {
    width: 23rem;
  }

  @media ${devices.mobile} {
    width: 15rem;
  }
  .settings {
    width: 100%;
    height: 20rem;

    @media ${devices.mobile} {
      display: none;
    }
  }
`;
