function computerPlay() {
    /**Randomly choose a hand, either rock, paper, or scissors, and return it.
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
     * @return {Number} one of 1, 2, or 3, where:
     *                  1 represents tie
                        2 represents player wins
                        3 represents player loses (computer wins)
     */
    
    //If tie, return tie message
    if (playerSelection === computerSelection) {
        return 1;
    }
    //Check for player winning conditions, and return winning message if player matches a winning condition
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return 2;
    }
    //If player does not match any winning conditions, return losing message
    else {
        return 3;
    }
}

function game() {
    /**Play a 5 round game. 
     * 
     */

    let playerSelection = prompt();
}

//test code
let playerSelection = "rock";
let computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

//Call the main game function
game();