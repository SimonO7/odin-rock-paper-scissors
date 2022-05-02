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
    
    //If tie, return tie
    if (playerSelection === computerSelection) {
        return 1;
    }
    //Check for player winning conditions, and return winning code if player matches a winning condition
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return 2;
    }
    //If player does not match any winning conditions, return losing code
    else {
        return 3;
    }
}

function game() {
    /**Play a 5 round game. Keep track of the score and declare the winner after 5 rounds.
     * @param none
     */

    let playerScore = 0
    let computerScore = 0;
    for (let play = 0; play < 5; play++) {
        let playerSelection = prompt("Enter your selection (rock, paper, or scissors)").toLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        switch (result) {
            //Result code 1 = tie
            case 1:
                console.log(`It's a tie. You both chose ${playerSelection}`);
                break;
            //Result code 2 = player wins
            case 2:
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                playerScore += 1;
                break;
            //Result code 3 = computer wins
            case 3:
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