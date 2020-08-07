import React, { Component } from 'react';
// import './App.css';
import GamePage from '../../pages/GamePage/GamePage';
import { Route, Switch } from 'react-router-dom';
import SettingsPage from '../SettingsPage/SettingsPage';

const colors = {
  easy: ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'],
  medium: ['#6a0dad', '#0000ff', '#ffc0cb', '#90ee90', '#ffa500'],
  hard: ['#ffc0cb', '#ffff00', '#00bfff', '#008000', '#ff0000', '#ffa500'],
};

class App extends Component {
  state = {
    difficulty: 'easy',
    ...this.getInitialState(),
  };

  getInitialState() {
    return {
      selColorIdx: 0,
      guesses: [this.getNewGuess()],
      code: this.genCode(),
      elapsedTime: 0,
      timerOn: true,
    };
  }

  getNewGuess() {
    return {
      code: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0,
      },
    };
  }

  genCode() {
    return new Array(4).fill().map((dummy) => Math.floor(Math.random() * 4));
  }

  getWinTries() {
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
  }

  handleColorSelection = (colorIdx) => {
    this.setState({ selColorIdx: colorIdx });
  };

  handleNewGameClick = () => {
    this.setState(this.getInitialState());
  };

  handlePegClick = (pegIdx) => {
    let currentGuessIdx = this.state.guesses.length - 1;

    let guessesCopy = [...this.state.guesses];
    let guessCopy = { ...guessesCopy[currentGuessIdx] };
    let codeCopy = [...guessCopy.code];

    codeCopy[pegIdx] = this.state.selColorIdx;

    guessCopy.code = codeCopy;

    guessesCopy[currentGuessIdx] = guessCopy;

    this.setState({
      guesses: guessesCopy,
    });
  };

  handleDifficultyChange = (level) => {
    this.setState({ difficulty: level }, () => this.handleNewGameClick());
  };

  handleScoreClick = () => {
    let currentGuessIdx = this.state.guesses.length - 1;

    let guessCodeCopy = [...this.state.guesses[currentGuessIdx].code];
    let secretCodeCopy = [...this.state.code];

    let perfect = 0,
      almost = 0;

    guessCodeCopy.forEach((code, idx) => {
      if (secretCodeCopy[idx] === code) {
        perfect++;
        guessCodeCopy[idx] = secretCodeCopy[idx] = null;
      }
    });

    guessCodeCopy.forEach((code, idx) => {
      if (code === null) return;
      let foundIdx = secretCodeCopy.indexOf(code);
      if (foundIdx > -1) {
        almost++;
        secretCodeCopy[foundIdx] = null;
      }
    });

    let guessesCopy = [...this.state.guesses];
    let guessCopy = { ...guessesCopy[currentGuessIdx] };
    let scoreCopy = { ...guessCopy.score };

    scoreCopy.perfect = perfect;
    scoreCopy.almost = almost;

    guessCopy.score = scoreCopy;

    guessesCopy[currentGuessIdx] = guessCopy;

    if (perfect !== 4) guessesCopy.push(this.getNewGuess());

    this.setState({
      guesses: guessesCopy,
      timerOn: perfect !== 4,
    });
  };

  handleDifficultyClick = (difficulty) => {
    this.setState(
      {
        ...this.state,
        difficulty: difficulty,
      },
      () => this.handleNewGameClick()
    );
  };

  handleTimerUpdate = () => {
    this.setState((state) => ({ elapsedTime: ++state.elapsedTime }));
  };

  render() {
    console.log('app');
    let winTries = this.getWinTries();
    return (
      <div className='App'>
        <header className='App-header'>Mastermind</header>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <GamePage
                winTries={winTries}
                colors={colors[this.state.difficulty]}
                selColorIdx={this.state.selColorIdx}
                guesses={this.state.guesses}
                handleColorSelection={this.handleColorSelection}
                handleNewGameClick={this.handleNewGameClick}
                handlePegClick={this.handlePegClick}
                handleScoreClick={this.handleScoreClick}
                handleTimerUpdate={this.handleTimerUpdate}
                elapsedTime={this.state.elapsedTime}
                timerOn={this.state.timerOn}
              />
            )}
          />
          <Route
            path='/settings'
            render={(props) => (
              <SettingsPage
                handleDifficultyChange={this.handleDifficultyChange}
                colors={colors}
                difficulty={this.state.difficulty}
                {...props}
              />
            )}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
