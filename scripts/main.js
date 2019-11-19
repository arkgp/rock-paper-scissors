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
    let playerChoice;

    if (e.target.localName === 'body') {
        const button = document.querySelector(`button[data-key='${e.keyCode}'`);
        playerChoice = button.className;
        button.classList.add('button-effect');
    } else {
        playerChoice = e.target.getAttribute('class');
        e.target.classList.add('button-effect');
    }

    document.getElementById(computerChoice.toLowerCase()).classList.add('button-effect');

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
        document.querySelector('#player-point span:last-child'),
    computerPoint = 
        document.querySelector('#computer-point span:last-child'),
    roundNumber = 
        document.querySelector('#round-number span:last-child'),
    result = document.getElementById('round-result');
    
    
    if (result.textContent.includes('You win!')) {
        playerPoint.textContent = +playerPoint.textContent + 1;
    } else if (result.textContent.includes('You lose!')) {
        computerPoint.textContent = +computerPoint.textContent + 1;
    } else if (result.textContent.includes('Tie!')) {
        playerPoint.textContent = +playerPoint.textContent + 1;
        computerPoint.textContent = +computerPoint.textContent + 1;
    }

    roundNumber.textContent = +roundNumber.textContent + 1;

    if ( (+playerPoint.textContent >= 5 && +computerPoint.textContent < 5) || 
         (+computerPoint.textContent >= 5 && +playerPoint.textContent < 5) ) {  
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
    const buttonContainer = document.getElementById("player-divs");
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


const gameButtons = document.querySelectorAll('#player-divs');

gameButtons.forEach( button => button.addEventListener('click', playRound) );
gameButtons.forEach( button => button.addEventListener('transitionend', function(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('button-effect');
}) );

const computerHands = document.querySelectorAll('#computer-hand');

computerHands.forEach( button => button.addEventListener('transitionend', function(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('button-effect');
}) );

window.addEventListener('keydown', function(keyDown) {
    const hand = document.querySelector(`button[data-key='${keyDown.keyCode}'`);
    let test = keyDown.target.localName;
    playRound(keyDown);
  });