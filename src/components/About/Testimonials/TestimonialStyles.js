import styled from 'styled-components';
import devices from "../../../utils/devices"

export default styled.div`
.CardsContainer{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;
}
.Card{
    display:flex;
    flex-direction:column;
    border-radius:1rem;
    max-width:400px
    padding:20px;
    margin-bottom:3rem;
    box-shadow:0px 4px 7px rgba(0,0,0,0.2);
    background-color:white;
}
.User{
    display:flex;
    justify-content:space-around;
    align-items:center;
}
.circle{
    background:#4FAD65;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    margin-right: 1.2rem;
    border-radius: 50%;
}
@media${devices.large}{
    .CardsContainer{
        flex-direction:row;
        justify-content: space-between;
        align-items:stretch;
    }
    .Card{
        margin: 3rem 1rem;
    }
}
`;