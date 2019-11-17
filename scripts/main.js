'use strict';

function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Paper";
            break;
        case 1:
            return "Rock";
            break;    
        
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerChoice, computerChoice) {
    if (computerChoice === 'Rock') {
        switch (playerChoice.toLowerCase()) {
            case 'rock':
                return 'Tie! Rock ties with another rock.';
                break;
            case 'paper':
                return 'You win! Paper beats rock.';
                break;
            case 'scissors':
                return 'You lose! Scissors loses to rock.';
                break;
        }

    } else if (computerChoice === 'Paper') {
        switch (playerChoice.toLowerCase()) {
            case 'rock':
                return 'You lose! Rock loses to paper.';
                break;
            case 'paper':
                return 'Tie! Paper ties with another paper.';
                break;
            case 'scissors':
                return 'You win! Scissors beats paper.';
                break;
        }

    } else if (computerChoice === 'Scissors') {
        switch (playerChoice.toLowerCase()) {
            case 'rock':
                return 'You win! Rock beats scissors.';
                break;
            case 'paper':
                return 'You lose! Paper loses to scissors.';
                break;
            case 'scissors':
                return 'Tie! Scissors ties with another scissors.';
                break;
        }

    }
}

function game() {
    let playerPoint = 0;
    let computerPoint = 0;

    for (let index = 0; index < 5; index++) {
        const playerChoice = prompt('Choose between rock, paper or scissors');
        const computerChoice = computerPlay();

        let roundResult = playRound(playerChoice, computerChoice);

        if (roundResult.includes('You win!')) {
            playerPoint++;
        } else if (roundResult.includes('You lose!')) {
            computerPoint++;
        } else if (roundResult.includes('Tie!')) {
            playerPoint++;
            computerPoint++;
        }

        console.log(roundResult);
    }

    displayResult(playerPoint, computerPoint);
}

function displayResult(playerPoint, computerPoint) {
    if (playerPoint > computerPoint) {

        console.log(`Congratulations! You won the match with ${playerPoint} 
        points against ${computerPoint} points.`);

    } else if (playerPoint < computerPoint) {

        console.log(`Oh no! You lost the match with ${playerPoint} points
        against ${computerPoint} points.`);

    } else if (playerPoint === computerPoint) {

        console.log(`It's a tie! You both had ${playerPoint} points.`);

    }
}

game();