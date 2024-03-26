let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;
playGame();

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
}

function calcRoundResult(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === "rock" && playerSelection === "rock") {
        return "Round draw! You both chose Rock!"
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++;
        return "You win the round! Paper beats Rock"
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        return "You lose the round! Scissors looses to Rock!"

    } else if (computerSelection === "paper" && playerSelection === "paper") {
        return "Round draw! You both chose Paper!"
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        return "You win the round! Scissors beats Paper"
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return "You lose the round! Rock looses to Paper!"

    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return "Round draw! You both chose Scissors!"
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++;
        return "You win the round! Rock beats Scissors"
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return "You lose the round! Paper looses to Scissors!"
    }
}

function playGame() {
    let playerChoice = prompt("Choose your move: ");
    console.log(calcRoundResult(getComputerchoice(), playerChoice))

    playerChoice = prompt("Choose your move: ");
    console.log(calcRoundResult(getComputerchoice(), playerChoice))

    playerChoice = prompt("Choose your move: ");
    console.log(calcRoundResult(getComputerchoice(), playerChoice))

    playerChoice = prompt("Choose your move: ");
    console.log(calcRoundResult(getComputerchoice(), playerChoice))

    playerChoice = prompt("Choose your move: ");
    console.log(calcRoundResult(getComputerchoice(), playerChoice))

    if (playerScore > computerScore) {
        console.log("You won the best of 5! Congradulations!")
    } else if (playerScore < computerScore) {
        console.log("You lost the best of 5! Better luck next time.")
    } else {
        console.log("Match draw!")
    }
}

