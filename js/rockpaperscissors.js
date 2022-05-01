function computerPlay() {
    /**
     * Randomly choose a hand, either rock, paper, or scissors, and return it.
     * @param none
     * @return {string} one of "Rock", "Paper", or "Scissors"
     */

    //Create a list with elements "Rock", "Paper", and "Scissors"
    const options = ["Rock", "Paper", "Scissors"];
    //Generate a random number between 0 and 2. That will be the index of the element.
    const index = Math.floor(Math.random()*3);
    //Return the element from that index.
    return options[index];
}

console.log(computerPlay());