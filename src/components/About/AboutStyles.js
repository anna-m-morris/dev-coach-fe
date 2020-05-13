import styled from 'styled-components';
import devices from '../../utils/devices';

export default styled.div`

//mobile

  display: flex;
  flex-direction: column;
  justify-content:center;
 
  background-image: url("https://i.ibb.co/7y084jG/green-dots.png");
  background-color: #E6F3E6;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

    .navigation {
      .list-items .list-item a {
        color: black;
      }
    }

    .title {
      display:flex;
      color: #4FAD65;
      font-size: 1.3rem;
      justify-content:center;
        h1 {
          width:76%
          text-align: center;
        }  
    }

    .about-cards-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align:center;
    }
  
   .about-card {
    margin: 0 1rem 3.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
    margin-left: 0rem;
    width: 100%;
      :nth-child(2){
        flex-direction:column-reverse;
      }
      :nth-child(4){
        flex-direction:column-reverse;
      }
      p {
        margin-top: 0rem;
        width: 25rem;
      }
    }

    .card-image{
        margin-top:1rem;
        width: 25rem;
        height: 17rem;
        background: #4FAD65;
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);
    }

//computer

@media${devices.large}{

  padding-left: 22%;
  padding-right: 20%;
  max-width: 880px;

    .title {
      display:block;
       font-size: 1.6rem;

        h1 {
          margin-top:2rem;
          margin-bottom: 3.5rem;
          text-align:left;
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
      text-align:left;
     
    .about-card {
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
      p {
        width: 20rem;
      }
    }
`;