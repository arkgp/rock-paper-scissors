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

function playRound(e) {

    const computerChoice = computerPlay();

    const playerChoice = e.target.getAttribute('id');

    const result = document.getElementById('round-result');

    if (computerChoice === 'Rock') {
        switch (playerChoice.toLowerCase()) {
            case 'rock':
                result.textContent = 'Tie! Rock ties with another rock.';
                break;
            case 'paper':
                result.textContent = 'You win! Paper beats rock.';
                break;
            case 'scissors':
                result.textContent = 'You lose! Scissors loses to rock.';
                break;
        }

    } else if (computerChoice === 'Paper') {
        switch (playerChoice.toLowerCase()) {
            case 'rock':
                result.textContent =  'You lose! Rock loses to paper.';
                break;
            case 'paper':
                result.textContent = 'Tie! Paper ties with another paper.';
                break;
            case 'scissors':
                result.textContent = 'You win! Scissors beats paper.';
                break;
        }

    } else if (computerChoice === 'Scissors') {
        switch (playerChoice.toLowerCase()) {
            case 'rock':
                result.textContent = 'You win! Rock beats scissors.';
                break;
            case 'paper':
                result.textContent = 'You lose! Paper loses to scissors.';
                break;
            case 'scissors':
                result.textContent = 'Tie! Scissors ties with another scissors.';
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

const gameButtons = document.querySelectorAll('#button-container');

gameButtons.forEach( button => button.addEventListener('click', playRound) );