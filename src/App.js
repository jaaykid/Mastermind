import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];
class App extends Component {
  state = {
    selectedColor: 0,
    guesses: [this.getNewGuess(), this.getNewGuess()],
    code: this.genCode(),
  };
  genCode() {
    return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
  }
  getNewGuess() {
    return {
      code: [0, 0, 2, 1],
      // code: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0,
      },
    };
  }

  getWinTries() {
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
  }
  render() {
    let winTries = this.getWinTries();
    return (
      <div className='App'>
        <header className='App-header'>React Mastermind</header>
        <div className='flex-h'>
          <GameBoard guesses={this.state.guesses} colors={colors} />
          <div>
            <ColorPicker colors={colors} colorIdx={this.state.selectedColor} />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer>{winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!'}</footer>
      </div>
    );
  }
}

export default App;
