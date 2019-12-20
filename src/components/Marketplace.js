import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import devices from './devices';
import logo from '../img/firelogo.png';
import StyledButton from './Landing';

// DUMMY DATA //

const marketplaceCoaches = [
  {
    id: 1,
    first_name: 'Jayne',
    last_name: 'Carmichael Norrie',
    email: 'jayne@musicisourforte.co.uk',
    password:
      '$2a$10$3LmQzlDtk/1NYys6kn5Ea.FH680/SzfqPWNTC3X9qZQ9.a.I1Z3vi',
    location: 'Aberdeen',
    role_id: 2,
    user_id: 1,
    avatar_url: 'https://bit.ly/325XJrX',
    experience_level: 1,
    skill_level: 1,
    description:
      'Jayne worked as a singing teacher and is now studying with Lambda School',
    rating: null,
    hourly_rate: null,
    contact_url: null,
  },
  {
    id: 2,
    first_name: 'Liam',
    last_name: 'Sutton',
    email: 'liam@google.com',
    password:
      '$2a$10$XgS80caZEgW20Uj38NE9zuSe5jALbx28C8s6Z80Rf4o4BMz4iEe9W',
    location: 'London',
    role_id: 2,
    user_id: 2,
    avatar_url: 'https://bit.ly/2Q0cbgm',
    experience_level: 1,
    skill_level: 1,
    description: 'Liam is an expert in Node.js',
    rating: null,
    hourly_rate: null,
    contact_url: null,
  },
  {
    id: 3,
    first_name: 'Funmi',
    last_name: 'Talabi',
    email: 'funmi@google.com',
    password:
      '$2a$10$GN5PGxtMHX5fkAugZ5KYB.Z3/xfZoFc033frjUlTW.0OaD6mY0n8K',
    location: 'Lagos',
    role_id: 2,
    user_id: 3,
    avatar_url: 'https://bit.ly/36SwAec',
    experience_level: 1,
    skill_level: 1,
    description: 'Funmi is an expert in React',
    rating: null,
    hourly_rate: null,
    contact_url: null,
  },
];

// STYLED COMPONENTS //
const BackgroundContainer = styled.section`
  height: 100vh;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid blue;

  @media ${devices.tablet} {
    border: 3px solid orange;
  }

  @media ${devices.mobile} {
    border: 3px solid green;
  }
`;

// NAVIGATION STYLED COMPONENTS //
const NavigationContainer = styled.div`
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #cdc7c7;
`;
const LogoAndNameContainer = styled.div`
  font-family: Ubuntu;
  font-size: 18px;
  background: white;
  height: 3em;
  width: 70vw;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  height: 10em;
  width: 5em;
  background-image: url(${logo});
  background-repeat: no-repeat;
  padding: none;
  margin: none;
  position: 0;
`;

const TitleContainer = styled.div`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  color: #459a59;
  font-size: 18px;

  @media ${devices.tablet} {
    font-size: 16px;
  }

  @media ${devices.mobile} {
    font-size: 12px;
  }
`;

const NavLinkContainer = styled.div`
  font-family: Ubuntu;
  font-size: 18px;
  background: white;
  height: 3em;
  width: 28vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: black;
  }
`;

const NavLink = styled.h4`
  font-family: Ubuntu;
  color: black;
  padding: 0px 10px;
`;

// SEARCH SECTION

// MAIN SECTION COMPONENTS
const MainContainer = styled.section`
  background-color: #ffffff;
  height: 80vh;
  width: 98vw;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 3px solid pink;

  img {
    width: 8vw;
    border-radius: 50%;
  }

  @media ${devices.tablet} {
    border: 3px solid yellow;
  }

  @media ${devices.mobile} {
    border: 3px solid red;
  }
`;

const CoachCard = styled.div`
  font-family: Ubuntu;
  display: flex;
  min-height: 350px;
  width: 250px;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #cdc7c7;

  div {
    background-colour: pink;
  }

  h2 {
    margin: 5px 0px;
  }

  h5 {
    margin: 0px;
    padding: 5px 0px;
    font-size: 12px;
  }

  p {
    min-height: 60px;
  }

  @media ${devices.tablet} {
    flex-wrap: wrap;
  }

  @media ${devices.mobile} {
    border: 3px solid red;
  }
`;

const CoachCardButton = styled.button`
  width: 8vw;
  border: none;
  background-color: #4fad65;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 4em;
  width: 8em;
  padding: 1em;
  border: none;
  font-family: ABeeZee;
  font-size: 16px;

  :focus {
    outline: none;
  }

  :active {
    outline: none;
    transform: translateY(2px);
  }

  @media ${devices.tablet} {
    background-color: #4fda65;
  }
  @media ${devices.mobile} {
    border: 3px solid red;
  }
`;

const SkillExperienceDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function Marketplace(props) {
  const [searchTerm, changeSearchTerm] = useState('');
  const [coaches, setCoaches] = useState([]);

  const handleChange = event => {
    changeSearchTerm(event.target.value.toLowerCase());
  };

  const search = event => {
    event.preventDefault();
    setCoaches(
      marketplaceCoaches.filter(info => {
        return info.name.includes(searchTerm);
      }),
    );
  };

  // useEffect(() => {
  //   axios
  //     .get('https://dev-coach-staging.herokuapp.com/profile/coaches')
  //     .then(response => {
  //       console.log(response);
  //       // setCharacters(response.data.results);
  //     });
  // }, []);

  return (
    <BackgroundContainer>
      <NavigationContainer>
        <LogoAndNameContainer>
          <Logo />
          <TitleContainer>
            <h2>Dev Coach</h2>
          </TitleContainer>
        </LogoAndNameContainer>

        <NavLinkContainer>
          <NavLink>FAQ</NavLink>
          <NavLink>
            <Link to='/dashboard'>Settings</Link>
          </NavLink>
        </NavLinkContainer>
      </NavigationContainer>

      <h1>Choose your Dev Coach</h1>
      <MainContainer>
        {marketplaceCoaches.map(info => (
          <CoachCard>
            <img src={info.avatar_url} />
            <h2>{info.first_name}</h2>{' '}
            <h5>Location: {info.location}</h5>
            <p>{info.description}</p>
            <SkillExperienceDiv>
              <div>
                <h5>Skill: {info.skill_level}</h5>
              </div>
              <div>
                <h5>Experience: {info.experience_level}</h5>
              </div>
            </SkillExperienceDiv>
            <CoachCardButton>Book Now</CoachCardButton>
          </CoachCard>
        ))}
      </MainContainer>
    </BackgroundContainer>
  );
}

export default Marketplace;
