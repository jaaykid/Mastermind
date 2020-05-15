import React from 'react';

const NewGameButton = ({ handleGameStart }) => (
  <button className='btn btn-default' onClick={() => handleGameStart()}>
    New Game
  </button>
);

export default NewGameButton;
