import React from 'react';
import styled from 'styled-components';
import devices from './devices';

// DUMMY DATA //
 const marketplaceUsers = [{
  first_name: 'Jayne',
  last_name: 'Carmichael Norrie',
  email: 'jayne@musicisourforte.co.uk',
  password: 'chico',
  role_id: 2,
},
{
  first_name: 'Liam',
  last_name: 'Sutton',
  email: 'liam@google.com',
  password: 'liam',
  role_id: 2,
},
{
  first_name: 'Funmi',
  last_name: 'Talabi',
  email: 'funmi@google.com',
  password: 'funmi',
  role_id: 2,
}];

const marketplaceCoaches = [{
  user_id: 1,
  avatar_url: 'google.com',
  experience_level: 1,
  skill_level: 1,
  description:
    'Jayne worked as a singing teacher for 9 years and is now studying with Lambda School',
},
{
  user_id: 2,
  avatar_url: 'Github.com',
  experience_level: 1,
  skill_level: 1,
},
{
  user_id: 3,
  avatar_url: 'Paypal.com',
  experience_level: 1,
  skill_level: 1,
}];


// STYLED COMPONENTS //
const BackgroundContainer = styled.div`
  height: 100vh;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid blue;

  @media ${devices.tablet} {
    border: 3px solid orange;
  }
  
  @media ${devices.mobile} {
    border: 3px solid green;
  }
`;

function Marketplace(props) {
  
  return (
    <BackgroundContainer>
      <h1>Hello I'm a Marketplace</h1>
    </BackgroundContainer>
  )
}

export default Marketplace;