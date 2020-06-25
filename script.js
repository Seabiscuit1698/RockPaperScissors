
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const userScore = document.querySelector("#userScore");
const compScoreValue = document.querySelector('#compScoreValue');
const para = document.querySelector('#para');


let compScore = 0;
let playerScore = 0;
let playerSelection;
let compSelection;

function getCompChoice() {
    let compChoices = ['rock', 'paper', 'scissors'];
    return compSelection = compChoices[Math.floor(Math.random() * compChoices.length)];
}

function playGame(playerSelection) {
    getCompChoice();
    playOneRound(playerSelection, compSelection);
    displayScore();
    checkForWinner();
}

function playOneRound(playerSelection, compSelection) {
    if (playerSelection === compSelection) {
        para.textContent = "It's a tie!";
    } else if (playerSelection == 'rock' && compSelection == 'scissors') {
        para.textContent = `Your ${playerSelection} beats the computer's ${compSelection}!`;
        playerScore++;
    } else if (playerSelection == 'paper' && compSelection == 'rock') {
        para.textContent = `Your ${playerSelection} beats the computer's ${compSelection}!`;
        playerScore++;
    } else if (playerSelection == 'scissors' && compSelection == 'paper') {
        para.textContent = `Your ${playerSelection} beats the computer's ${compSelection}!`;
        playerScore++;
    } else {
        para.textContent = `The computer's ${compSelection} beats your ${playerSelection}.`;
        compScore++;
    }
}

function displayScore() {
    userScore.textContent = playerScore;
    compScoreValue.textContent = compScore;
}

function checkForWinner() {
    if (playerScore >= 5 || compScore >= 5) {
        if (playerScore >= 5) {
            para.textContent = "You win!";
            compScore = 0;
            playerScore = 0;
        } else {
            para.textContent = "You lose."
            compScore = 0;
            playerScore = 0;
        }
    } else {
        return;
    }
}

para.textContent = "Choose rock, paper, or scissors.";