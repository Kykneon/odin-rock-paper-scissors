let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultTracker = document.querySelector('.results');
const playerScoreTracker = document.querySelector('.player-score');
const computerScoreTracker = document.querySelector('.computer-score');

rockBtn.addEventListener('click', () => {
    roundResult = calcRoundResult('rock')
    text = document.createElement('div')
    text.textContent = roundResult;
    resultTracker.appendChild(text);
    roundsPlayed += 1;
    updateGameScore(roundResult);
    checkGameState();
});

paperBtn.addEventListener('click', () => {
    roundResult = calcRoundResult('paper')
    text = document.createElement('div')
    text.textContent = roundResult;
    resultTracker.appendChild(text);
    roundsPlayed += 1;
    updateGameScore(roundResult);
    checkGameState();
});

scissorsBtn.addEventListener('click', () => {
    roundResult = calcRoundResult('scissors')
    text = document.createElement('div')
    text.textContent = roundResult;
    resultTracker.appendChild(text);
    roundsPlayed += 1;
    updateGameScore(roundResult);
    checkGameState();
});

// Once 5 rounds have been played compares player/computer score and determines game winner
function checkGameState() {
    if (roundsPlayed === 5) {
        if (playerScore > computerScore) {
            winner = document.createElement('div');
            winner.textContent = 'You won the best of 5! Congradulations!';
            resultTracker.appendChild(winner);
        } else if (computerScore > playerScore) {
            loser = document.createElement('div');
            loser.textContent = 'You lost the best of 5! Better luck next time.';
            resultTracker.appendChild(loser);
        } else {
            draw = document.createElement('div');
            draw.textContent = 'Match draw!';
            resultTracker.appendChild(draw);
        }
    }
};

// Logic has a slight bias to scissors by like 3.3%
// Rework logic to use decimals instead of ints
function getComputerchoice() {
    let rand = Math.floor(Math.random() * 100 + 1);
    if (rand <= 33) {
        return "rock"
    } else if (rand >= 34 && rand <= 66) {
        return "paper"
    } else {
        return "scissors"
    }
};

// Updates score counters of player/computer depending on round outcome
function updateGameScore(roundResult) {
    if (roundResult === "You win the round! Paper beats Rock" ||
        roundResult === "You win the round! Scissors beats Paper" ||
        roundResult === "You win the round! Rock beats Scissors") {
        playerScore += 1;
        playerScoreTracker.textContent = playerScore;
    } else if (roundResult === "You lose the round! Scissors looses to Rock!" ||
        roundResult === "You lose the round! Rock looses to Paper!" ||
        roundResult === "You lose the round! Paper looses to Scissors!") {
        computerScore += 1;
        computerScoreTracker.textContent = computerScore;
    }
};

// Cacluclates the result of a round based on player/computer choices
function calcRoundResult(playerSelection) {
    computerSelection = getComputerchoice();
    if (computerSelection === "rock" && playerSelection === "rock") {
        return "Round draw! You both chose Rock!"
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win the round! Paper beats Rock"
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose the round! Scissors looses to Rock!"

    } else if (computerSelection === "pYou lost the best of 5! Better luck next time.aper" && playerSelection === "paper") {
        return "Round draw! You both chose Paper!"
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You win the round! Scissors beats Paper"
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose the round! Rock looses to Paper!"

    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return "Round draw! You both chose Scissors!"
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You win the round! Rock beats Scissors"
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lose the round! Paper looses to Scissors!"
    }
};


