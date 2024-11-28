import React, { Component } from 'react';
import Game from './components/Game';
import Rules from './components/Rules';
import './App.css';

const choicesList = [
  {
    id: 'ROCK',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
];

class App extends Component {
  state = {
    score: 0,
  };

  updateScore = (result) => {
    this.setState((prevState) => {
      let newScore = prevState.score;
      if (result === 'YOU WON') {
        newScore += 1;
      } else if (result === 'YOU LOSE') {
        newScore -= 1;
      }
      return { score: newScore };
    });
  };

  render() {
    const { score } = this.state;
    return (
      <div className="app-container">
        <header className="header">
          <h1 className="title">Rock Paper Scissors</h1>
          <div className="score-container">
            <p className="score-label">Score</p>
            <p className="score-value">{score}</p>
          </div>
        </header>
        <Game updateScore={this.updateScore} choicesList={choicesList} />
        <Rules />
      </div>
    );
  }
}

export default App;
