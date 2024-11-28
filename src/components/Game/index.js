import React, { Component } from 'react';
import {
    GameContainer,
    ChoicesContainer,
    ChoiceButton,
    ChoiceImage,
    ResultContainer,
    ResultText,
    PlayAgainButton,
} from './styledComponents';

class Game extends Component {
    state = {
        isPlaying: true,
        userChoice: null,
        opponentChoice: null,
        result: '',
    };

    getRandomChoice = () => {
        const { choicesList } = this.props;
        const randomIndex = Math.floor(Math.random() * choicesList.length);
        return choicesList[randomIndex];
    };

    determineResult = (userChoice, opponentChoice) => {
        if (userChoice.id === opponentChoice.id) {
            return 'IT IS DRAW';
        }
        if (
            (userChoice.id === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
            (userChoice.id === 'PAPER' && opponentChoice.id === 'ROCK') ||
            (userChoice.id === 'SCISSORS' && opponentChoice.id === 'PAPER')
        ) {
            return 'YOU WON';
        }
        return 'YOU LOSE';
    };

    onChoiceClick = (choice) => {
        const opponentChoice = this.getRandomChoice();
        const result = this.determineResult(choice, opponentChoice);
        this.setState({
            isPlaying: false,
            userChoice: choice,
            opponentChoice,
            result,
        });
        this.props.updateScore(result);
    };

    onPlayAgainClick = () => {
        this.setState({
            isPlaying: true,
            userChoice: null,
            opponentChoice: null,
            result: '',
        });
    };

    render() {
        const { isPlaying, userChoice, opponentChoice, result } = this.state;
        const { choicesList } = this.props;

        return (
            <GameContainer>
                {isPlaying ? (
                    <ChoicesContainer>
                        {choicesList.map((choice) => (
                            <ChoiceButton
                                key={choice.id}
                                data-testid={`${choice.id.toLowerCase()}Button`}
                                onClick={() => this.onChoiceClick(choice)}
                            >
                                <ChoiceImage src={choice.imageUrl} alt={choice.id} />
                            </ChoiceButton>
                        ))}
                    </ChoicesContainer>
                ) : (
                    <ResultContainer>
                        <div>
                            <ResultText>Your Choice</ResultText>
                            <ChoiceImage src={userChoice.imageUrl} alt="your choice" />
                        </div>
                        <div>
                            <ResultText>Opponent's Choice</ResultText>
                            <ChoiceImage src={opponentChoice.imageUrl} alt="opponent choice" />
                        </div>
                        <ResultText>{result}</ResultText>
                        <PlayAgainButton onClick={this.onPlayAgainClick}>Play Again</PlayAgainButton>
                    </ResultContainer>
                )}
            </GameContainer>
        );
    }
}

export default Game;
