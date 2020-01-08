import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import devices from './devices';
import logo from '../img/firelogo.png';
import vector from '../img/landingvector.png';
import CoachCard from '../components/CoachCard';
import { connect } from 'react-redux';
import { getCoaches, searchCoaches } from '../state/actions/marketplaceActions';
// import StyledButton from './Landing';

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
    description: 'Jayne is an expert in HTML',
    rating: 4.7,
    hourly_rate: 30,
    contact_url:
      'https://grok.appointedd.com/app/5df3a618fd49237ee763a793',
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
    experience_level: 2,
    skill_level: 2,
    description: 'Liam is an expert in Node.js',
    rating: 4.8,
    hourly_rate: 35,
    contact_url:
      'https://grok.appointedd.com/app/5dee69e59fec053a906edd03',
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
    experience_level: 3,
    skill_level: 3,
    description: 'Funmi is an expert in React',
    rating: 4.9,
    hourly_rate: 40,
    contact_url:
      'https://grok.appointedd.com/app/5dee6934c5b42f3bcf70b393',
  },
  {
    id: 4,
    first_name: 'Oladimeji',
    last_name: 'Ojo',
    email: 'ola@google.com',
    password:
      '$2a$10$GN5PGxtMHX5fkAugZ5KYB.Z3/xfZoFc033frjUlTW.0OaD6mY0n8K',
    location: 'Lagos',
    role_id: 2,
    user_id: 3,
    avatar_url: 'https://bit.ly/35I1kOT',
    experience_level: 3,
    skill_level: 3,
    description: 'Oladimeji is an expert in React',
    rating: 4.9,
    hourly_rate: 45,
    contact_url:
      'https://grok.appointedd.com/app/5dee6a896dd393114b473a73',
  },
  {
    id: 4,
    first_name: 'Dom',
    last_name: 'Eccleston',
    email: 'dom@google.com',
    password:
      '$2a$10$GN5PGxtMHX5fkAugZ5KYB.Z3/xfZoFc033frjUlTW.0OaD6mY0n8K',
    location: 'Sheffield',
    role_id: 2,
    user_id: 3,
    avatar_url: 'https://bit.ly/2FtdD5O',
    experience_level: 3,
    skill_level: 3,
    description: 'Dom is an expert in React',
    rating: 4.9,
    hourly_rate: 40,
    contact_url: 'https://www.youtube.com/watch?v=_EPM2vlPHpE',
  },
];

// STYLED COMPONENTS //
const BackgroundContainer = styled.section`
  height: 100vh;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

// SEARCH SECTION

const SearchDiv = styled.section`
  padding-top: 40px;
  margin-top: 40px;
  @media ${devices.tablet} {
    padding-top: 40px;
    margin-top: 90px;
  }
  background: #f2f2f2;
  /* border: 1px solid orange; */
  display: flex;
  align-items: center;
  margin: 15px;

  img {
    width: 15vw;
    margin-top: 30px;
    padding: 20px 20px;

    @media ${devices.tablet} {
      display: none;
    }
  }
`;

const SearchBar = styled.div`
  margin: 0px;
  padding: 70px 0px;
  input {
    background-color: white;
    padding: 5px;
    min-width: 25vw;
    @media ${devices.tablet} {
      min-width: 40vw;
    }
    @media ${devices.mobile} {
      width: 45vw;
    }
    border: 1px solid black;
    margin: 10px;
  }
  button {
    border: none;
    background-color: #4fad65;
    border-radius: 4px;
    color: white;
    margin: 5px;
    padding: 5px 20px;
  }
  h1 {
    font-size: 30px;
    @media ${devices.tablet} {
      padding: 0px;
      margin: 5px;
    }
  }
`;

// MAIN SECTION COMPONENTS
const MainContainer = styled.section`
  background-color: rgba(0, 0, 0, 0.25);
  /* min-height: 80vh; */
  min-width: 80vw;
  @media ${devices.tablet} {
    min-width: 70vw;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 8vw;
    border-radius: 50%;

    @media ${devices.tablet} {
      width: 15vw;
    }
    @media ${devices.mobile} {
      width: 20vw;
    }
  }
`;

function Marketplace(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [coaches, setCoaches] = useState(marketplaceCoaches);

  // const handleChange = event => {
  //   setSearchTerm(event.target.value);
  // };
  const handleChange = event => {
    setSearchTerm(event.target.value.toLowerCase());
    props.searchCoaches(searchTerm);

    
  };

  const search = event => {
    event.preventDefault();
    setCoaches(
      marketplaceCoaches.filter(info => {
        if (info.first_name.toLowerCase().includes(searchTerm)) {
          return info.first_name.toLowerCase().includes(searchTerm);
        }
        if (info.description.toLowerCase().includes(searchTerm)) {
          return info.description.toLowerCase().includes(searchTerm);
        }
        return info.location.toLowerCase().includes(searchTerm);
      }),
    );
  };

  useEffect(() => {
    props.getCoaches();
  }, []);

  return (
    <BackgroundContainer>
      <SearchDiv>
        <img src={vector} alt='vector illustration' />
        <SearchBar>
          <h1>Choose your Dev Coach</h1>
          <input
            type='text'
            name='searchTerm'
            placeholder='search topic, name, or location'
            value={searchTerm}
            onChange={handleChange}
          />
          <button onSubmit={search}>Search</button>
        </SearchBar>
      </SearchDiv>
      <MainContainer>
        {props.coaches.map(coach => (
          <CoachCard key={coach.first_name} coach={coach} />
        ))}
      </MainContainer>
    </BackgroundContainer>
  );
}
const mapStateToProps = state => {
  return {
    coaches: state.marketplaceReducer.coaches,
  };
};

export default connect(mapStateToProps, { getCoaches, searchCoaches })(Marketplace);
