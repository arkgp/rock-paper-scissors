'use strict';

// Use the transition effect that we just learned to display the computer choice.

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

    roundResult();
}

function roundResult() {
    let playerPoint = 
        document.querySelector('#player-point span'),
    computerPoint = 
        document.querySelector('#computer-point span'),
    roundNumber = 
        document.querySelector('#round-number span'),
    result = document.getElementById('round-result');
    
    if (+playerPoint.textContent < 5 && +computerPoint.textContent < 5) {
        if (result.textContent.includes('You win!')) {
            playerPoint.textContent = +playerPoint.textContent + 1;
        } else if (result.textContent.includes('You lose!')) {
            computerPoint.textContent = +computerPoint.textContent + 1;
        } else if (result.textContent.includes('Tie!')) {
            playerPoint.textContent = +playerPoint.textContent + 1;
            computerPoint.textContent = +computerPoint.textContent + 1;
        }
    
        roundNumber.textContent = +roundNumber.textContent + 1;
    } else {
        gameEnd(playerPoint, computerPoint);
    }

}

function gameEnd(playerPoint, computerPoint) {
    let gameMessage;
    if (+playerPoint.textContent > +computerPoint.textContent) {
        gameMessage = 
        `Congratulations! You won the match with ${+playerPoint.textContent} 
        points against ${+computerPoint.textContent} points.`;
    } else if (+playerPoint.textContent < +computerPoint.textContent) {
        gameMessage = 
        `Oh no! You lost the match with ${+playerPoint.textContent} 
        points against ${+computerPoint.textContent} points.`;

    } else if (+playerPoint.textContent === +computerPoint.textContent) {
        gameMessage = 
        `It's a tie! You both had ${+playerPoint.textContent} points.`;
    }

    gameResultDisplay(gameMessage);
}

function gameResultDisplay(gameMessage) {
    const buttonContainer = document.getElementById("button-container");
    while (buttonContainer.firstChild) {
        buttonContainer.removeChild(buttonContainer.firstChild);
    }

    const message = document.getElementById('round-result');
    message.textContent = gameMessage;

    const replayButton = document.createElement('button');
    replayButton.textContent = 'Replay';
    replayButton.addEventListener('click', gameReset);

    buttonContainer.appendChild(replayButton);

}

function gameReset() {
    location.reload();
}


const gameButtons = document.querySelectorAll('#button-container');

gameButtons.forEach( button => button.addEventListener('click', playRound) );