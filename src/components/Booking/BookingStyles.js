import styled from 'styled-components';

const StyledBooking = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;

  .instruction {
    text-align: center;
    margin-top: 1rem;
  }

  .steps-container {
    margin: 1rem 0;

    .select-container {
      display: flex;
      flex-direction: column-reverse;
      height: 7.2rem;
      justify-content: space-between;
    }
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
`;

export default StyledBooking;
