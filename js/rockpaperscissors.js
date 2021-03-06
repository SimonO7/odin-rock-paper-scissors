const options = ["Rock", "Paper", "Scissors"];
let playerSelection;
let playerScore;
let computerScore;
let round;

const resultsDisplay = document.querySelector('.result');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const playerHandDisplay = document.querySelector('#playerSelection');
const computerHandDisplay = document.querySelector('#computerSelection');
const finalResultDisplay = document.querySelector('.finalResult');
const buttons = document.querySelectorAll('input');
const resetButton = document.querySelector('#reset-button');
const roundCounter = document.querySelector('#round');

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
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return "player";
    }
    //If player does not match any winning conditions, return losing code
    else {
        return "computer";
    }
}

function displayHand(selection, elementToUpdate) {
    /**Display the hand selection on the page
     * @param {string} selection    The hand selection chosen
     * @param {string} elementToUpdate  The name of the element to update
     * @return none
     */
    switch (true) {
        case selection === "Rock" && elementToUpdate === playerHandDisplay:
            elementToUpdate.setAttribute("src", "./images/rock-r.png");
            break;
        case selection === "Paper" && elementToUpdate === playerHandDisplay:
            elementToUpdate.setAttribute("src", "./images/paper-r.png");
            break;
        case selection === "Scissors" && elementToUpdate === playerHandDisplay:
            elementToUpdate.setAttribute("src", "./images/scissors-r.png");
            break;
        case selection === "Rock" && elementToUpdate === computerHandDisplay:
            elementToUpdate.setAttribute("src", "./images/rock-l.png");
            break;
        case selection === "Paper" && elementToUpdate === computerHandDisplay:
            elementToUpdate.setAttribute("src", "./images/paper-l.png");
            break;
        case selection === "Scissors" && elementToUpdate === computerHandDisplay:
            elementToUpdate.setAttribute("src", "./images/scissors-l.png");
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
            resultsDisplay.textContent = `${playerSelection} vs ${computerSelection}. It's a tie!`;
            break;
        //Result code "player" == player wins
        case "player":
            resultsDisplay.textContent = `${playerSelection} vs ${computerSelection}. Player wins this round!`;
            playerScore += 1;
            break;
        //Result code "computer" == computer wins
        case "computer":
            resultsDisplay.textContent = `${playerSelection} vs ${computerSelection}. Computer wins this round!`;
            computerScore += 1;
            break;
    }

    //Update the score counter display
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    //Update the rounds counter display
    round += 1;
    roundCounter.textContent = round;
}

function game(event) {
    playRound(event.target.id);
    if (playerScore === 5 || computerScore === 5) {
        resetButton.classList.remove('hide');
        if (playerScore >= computerScore) {
            finalResultDisplay.textContent = "Player wins!";
            finalResultDisplay.style.color = "green";
        }
        else {
            finalResultDisplay.textContent = "Computer wins.";
            finalResultDisplay.style.color = "red";
        }
        buttons.forEach((button) => button.removeEventListener('click', game));
    }
}

function initializeGame() {
    /**Initialize the game by setting up the counters and buttons
     * @param none
     * @return none
     * */

    //Reset the scores and round counter
    playerScore = 0;
    computerScore = 0;
    round = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    roundCounter.textContent = round;

    //Clear the hand selection displays and display the placeholder, 
    //  and clear the results display and display play instructions.
    playerHandDisplay.setAttribute("src", "./images/question-mark.png");
    computerHandDisplay.setAttribute("src", "./images/question-mark.png"); 
    resultsDisplay.textContent = "Choose your hand below";
    finalResultDisplay.textContent = "";

    //Add the event listeners to buttons
    buttons.forEach((button) => button.addEventListener('click', game));

    //Hide the "play again" button
    resetButton.classList.add('hide');
}

resetButton.addEventListener('click', initializeGame);
initializeGame();



