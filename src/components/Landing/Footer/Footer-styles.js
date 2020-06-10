import styled from 'styled-components';
import devices from '../../../utils/devices';

export const FooterContainer = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .footer-bottom {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 1.6rem 0;

    @media ${devices.tablet} {
      flex-direction: column;
    }

    .footer-content {
      width: 15rem;
      opacity: 0.5;

      @media ${devices.tablet} {
        padding: 0.5rem 0;
        text-align: center;
      }
    }
  }

  .footer-icons {
    display: flex;
    justify-content: space-between;

    .fab {
      font-size: 2rem;

    }
  }

  .footer-tribute {
    text-align: right;
  }
`;
