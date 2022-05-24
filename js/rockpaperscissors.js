const options = ["rock", "paper", "scissors"];
let playerSelection;
let playerScore;
let computerScore;

const resultsDisplay = document.querySelector('.result');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const playerHandDisplay = document.querySelector('#playerSelection');
const computerHandDisplay = document.querySelector('#computerSelection');
const finalResultDisplay = document.querySelector('.finalResult');
const buttons = document.querySelectorAll('.playable-buttons');
const resetButton = document.querySelector('#reset-button')

function computerPlay() {
    /**Randomly choose a hand, either rock, paper, or scissors, and return it.
     * @param none
     * @return {string} one of "Rock", "Paper", or "Scissors"
     */
    const index = Math.floor(Math.random()*(options.length));
    return options[index];
}

function compareHand(playerSelection, computerSelection) {
    /**Take the player's selection and the computer's selection, and compare who is the winner.
     * @param {string} playerSelection      string, the player's input
     * @param {string} computerSelection    string. the computer's selection
     * @return {string} one of "tie", "player", or "computer", where:
     *                  "tie" represents tie
                        "player" represents player wins
                        "computer" represents player loses (computer wins)
     */
    
    //If tie, return tie
    if (playerSelection === computerSelection) {
        return "tie";
    }
    //Check for player winning conditions, and return winning code if player matches a winning condition
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return "player";
    }
    //If player does not match any winning conditions, return losing code
    else {
        return "computer";
    }
}

function displayHand(selection, elementToUpdate) {
    //show the appropriate image based on the hand selection
    switch (selection) {
        case "rock":
            elementToUpdate.setAttribute("src", "./images/rock.png");
            break;
        case "paper":
            elementToUpdate.setAttribute("src", "./images/paper.png");
            break;
        case "scissors":
            elementToUpdate.setAttribute("src", "./images/scissors.png");
            break;
    }
}

function playRound(playerSelection) {
    /**Play one round of rock paper scissors, and display and update the result and score of the round.
     * @param {string} playerSelection      string, the player's input
     * @return none
     */
    const computerSelection = computerPlay();
    displayHand(playerSelection, playerHandDisplay);
    displayHand(computerSelection, computerHandDisplay);
    const result = compareHand(playerSelection, computerSelection);
    switch (result) {
        //Result code "tie" == tie
        case "tie":
            resultsDisplay.textContent = `It's a tie. You both chose ${playerSelection}`;
            break;
        //Result code "player" == player wins
        case "player":
            resultsDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore += 1;
            break;
        //Result code "computer" == computer wins
        case "computer":
            resultsDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore += 1;
            break;
    }

    //Update the score display
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function game(event) {
    playRound(event.target.id);
    if (playerScore === 5 || computerScore === 5) {
        resetButton.classList.remove('hide');
        if (playerScore >= computerScore) {
            finalResultDisplay.textContent = "You win!";
        }
        else {
            finalResultDisplay.textContent = "You lose!";
        }
        buttons.forEach((button) => button.removeEventListener('click', game));
    }
}

function initializeGame() {
    /**Initialize the game by resetting the scores and adding the event listeners to buttons */
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerHandDisplay.setAttribute("src", "./images/question-mark.png");
    computerHandDisplay.setAttribute("src", "./images/question-mark.png"); 
    resultsDisplay.textContent = "";
    finalResultDisplay.textContent = "";
    buttons.forEach((button) => button.addEventListener('click', game));
    resetButton.classList.add('hide');
}

resetButton.addEventListener('click', initializeGame);
initializeGame();



