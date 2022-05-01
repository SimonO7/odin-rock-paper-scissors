function computerPlay() {
    /**
     * Randomly choose a hand, either rock, paper, or scissors, and return it.
     * @param none
     * @return {string} one of "Rock", "Paper", or "Scissors"
     */

    //Create a list with elements "rock", "paper", and "scissors"
    const options = ["rock", "paper", "scissors"];
    //Generate a random number between 0 and 2. That will be the index of the element.
    const index = Math.floor(Math.random()*3);
    //Return the element from that index.
    return options[index];
}

function playRound(playerSelection, computerSelection) {
    /**Take the player's selection and the computer's selection, and compare who is the winner.
     * @param {string} playerSelection      string, the player's input
     * @param {string} computerSelection    string. the computer's selection
     * @return {string} showing the result of the game and the winner.
     */
    
    //If tie, return tie message
    if (playerSelection === computerSelection) {
        return `It's a tie. You both chose ${playerSelection}`;
    }
    //Check for player winning conditions, and return winning message if player matches a winning condition
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    //If player does not match any winning conditions, return losing message
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let playerSelection = "rock";
let computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));