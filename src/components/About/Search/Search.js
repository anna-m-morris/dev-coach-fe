import React from 'react';
import SearchContainer from './SearchStyle';

const Search = () => {
  return (
    <SearchContainer>
      <h1>One-On-One Coaching</h1>
      <h2>Live chat, code along, interveiw practice, and more</h2>
      <p>
        From beginners making a splash in the industry to senior
        engineers, our coaches are ready to help you level up your
        skills.
      </p>
      <div>{/* search bar */}</div>
    </SearchContainer>
  );
};

export default Search;
