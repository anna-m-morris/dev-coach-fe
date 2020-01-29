import React from 'react';

const Lobby = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter your interview</h2>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Lobby;
