const options = ["rock", "paper", "scissors"];
let playerSelection;
let playerScore = 0
let computerScore = 0;

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

function game(playerSelection) {
    /**Take the player's selection and the computer's selection, and compare who is the winner.
     * @param {string} playerSelection      string, the player's input
     * @return none
     */
    const computerSelection = computerPlay();
    const result = compareHand(playerSelection, computerSelection);
    switch (result) {
        //Result code "tie" == tie
        case "tie":
            console.log(`It's a tie. You both chose ${playerSelection}`);
            break;
        //Result code "player" == player wins
        case "player":
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            playerScore += 1;
            break;
        //Result code "computer" == computer wins
        case "computer":
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            computerScore += 1;
            break;
    }
}

function playRound(event) {
    game(event.target.id);
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore >= computerScore) {
            console.log(`You win! Score is ${playerScore} - ${computerScore}`);
        }
        else {
            console.log(`You lose! Score is ${playerScore} - ${computerScore}`);
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playRound));

