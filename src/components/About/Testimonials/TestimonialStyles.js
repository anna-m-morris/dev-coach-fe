import styled from 'styled-components';
import devices from "../../../utils/devices"

export default styled.div`
.CardsContainer{
    display:flex;
    flex-direction:column;
    align-items:center;
    height:1200px;
    justify-content: space-evenly;
}
.Card{
    display:flex;
    flex-direction:column;
    border-style:solid;
    border-width:1px;
    border-radius:10%;
    width:300px
    padding:20px;
    height:275px
    margin-bottom:2rem
}
.User{
    display:flex;
    justify-content:space-around;
    align-items:center;
}
.circle{
    background:#4FAD65;
    border-radius:50%;
    width:100px;
    height:100px;
}

@media${devices.large}{
    .CardsContainer{
        flex-direction:row;
        height:auto;
        justify-content: space-between;
    }
    .Card{
        margin: 3rem 1rem;
        height: 246px;
    }
}

`;
