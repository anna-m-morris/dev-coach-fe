import styled from 'styled-components';
import devices from '../../../utils/devices';

export default styled.div`

//mobile
  display: flex;
  flex-direction: column;
  justify-content:center;

    .title {
      display:flex;
      font-size: 1.3rem;
    }

    .how-cards-container {
      display: flex;
      flex-direction: column;
      align-items:center;
    }
  
   .how-card {
    margin-bottom:3.5rem;
    display: flex;
    flex-direction: column;
    text-align: start;
      :nth-child(2){
        flex-direction:column-reverse;
      }
      :nth-child(4){
        flex-direction:column-reverse;
      }
      p {
        width: 25rem;
      }
    }

    .card-image{
        width: 25rem;
        height: 17rem;
        background: #4FAD65;
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);
    }

//computer

@media${devices.large}{

    .title {
      display:block;
       font-size: 1.6rem;

        h1 {
          margin-top:2rem;
          margin-bottom: 3.5rem;
          text-align:left;
          width:100%;
         }
        }

    .how-cards-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 2.5rem;
      text-align:left;
     
    .how-card {
      width:100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
      p {
        width: 20rem;
      }
    }
  }
`;