function computerPlay() {
    /**Randomly choose a hand, either rock, paper, or scissors, and return it.
     * @param none
     * @return {string} one of "Rock", "Paper", or "Scissors"
     */

    //Create a list with elements "rock", "paper", and "scissors"
    const options = ["rock", "paper", "scissors"];
    //Generate a random number between 0 and 2. That will be the index of the element.
    const index = Math.floor(Math.random()*(options.length));
    //Return the element from that index.
    return options[index];
}

function playRound(playerSelection, computerSelection) {
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

function game() {
    /**Play a 5 round game. 
     * Keep track of the score and declare the winner after 5 rounds.
     * @param none
     * @return none
     */

    let playerScore = 0
    let computerScore = 0;
    for (let play = 0; play < 5; play++) {
        let playerSelection = prompt("Enter your selection (rock, paper, or scissors)")
        if (playerSelection) {
            playerSelection = playerSelection.toLowerCase();
        }
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        switch (result) {
            //Result code "tie" = tie
            case "tie":
                console.log(`It's a tie. You both chose ${playerSelection}`);
                break;
            //Result code "player" = player wins
            case "player":
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                playerScore += 1;
                break;
            //Result code "computer" = computer wins
            case "computer":
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                computerScore += 1;
                break;
        }
    }
     //Check the scores after the 5 rounds
     if (playerScore >= computerScore) {
        console.log(`You win! Score is ${playerScore} - ${computerScore}`);
    }
    else {
        console.log(`You lose! Score is ${playerScore} - ${computerScore}`);
    }

}

//Call the main game function
game();