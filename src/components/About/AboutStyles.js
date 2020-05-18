import styled from 'styled-components';
import devices from "../../utils/devices"

export default styled.div`
padding: 0 5rem;

background-image: url("https://i.ibb.co/7y084jG/green-dots.png");
background-color: #E6F3E6;
background-position: center;
background-repeat: repeat-y;
background-size: cover;

h1{
  color: #4FAD65;
    font-size: 2.5rem;
    margin: 2rem 0 1rem 0
}
h2{
    margin: 2rem 0 1rem 0
}


  .navigation {
      .list-items .list-item a {
        color: black;
      }
    }
@media${devices.large}{
  padding: 0 17rem;
}
`;
