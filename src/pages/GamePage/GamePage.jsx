import React from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';
import './GamePage.css';
import { Link } from 'react-router-dom';

const GamePage = ({
  colors,
  guesses,
  handlePegClick,
  handleScoreClick,
  winTries,
  selColorIdx,
  handleColorSelection,
  handleNewGameClick,
  handleTimerUpdate,
  elapsedTime,
  timerOn,
}) => {
  return (
    <div className='App'>
      <div className='flex-h align-flex-end'>
        <GameBoard
          colors={colors}
          guesses={guesses}
          handlePegClick={handlePegClick}
          handleScoreClick={handleScoreClick}
        />
        <div className='App-controls'>
          <ColorPicker
            colors={colors}
            selColorIdx={selColorIdx}
            handleColorSelection={handleColorSelection}
          />
          <GameTimer
            elapsedTime={elapsedTime}
            handleTimerUpdate={handleTimerUpdate}
            timerOn={timerOn}
          />
          <Link className='btn btn-default margin-bottom' to='/settings'>
            Difficulty
          </Link>
          <NewGameButton handleNewGameClick={handleNewGameClick} />
          <Link className='btn btn-default' to='/how-to-play'>
            How to play
          </Link>
        </div>
      </div>
      <footer className='App-footer'>
        {winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!'}
      </footer>
    </div>
  );
};

export default GamePage;
