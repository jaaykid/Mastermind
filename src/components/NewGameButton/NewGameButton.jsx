import React from 'react';

const NewGameButton = ({ handleNewGameClick }) => (
  <button className='btn btn-default margin-bottom' onClick={() => handleNewGameClick()}>
    New Game
  </button>
);

export default NewGameButton;
