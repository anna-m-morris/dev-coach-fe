import React from 'react';
import Button from '@material-ui/core/Button';

const Lobby = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter your interview</h2>
      <Button
        type='submit'
        className='button'
        variant='contained'
        color='primary'
      >
        Start interview
      </Button>
    </form>
  );
};

export default Lobby;
