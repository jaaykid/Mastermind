import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import GameTimer from "./components/GameTimer/GamerTimer";
import NewGameButton from "./components/NewGameButton/NewGameButton";

const color = ["#7CCCE5", "#FDE47F", "#E04644", "#B576AD"];
class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedColor: 0,
    };
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>React Mastermind</header>
        <div className='flex-h'>
          <GameBoard />
          <div>
            <ColorPicker />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
