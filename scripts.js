// Create array of possible choices - all lowercase
const choices = ['rock', 'paper', 'scissors']

// Function to loop through five rounds and decide game winner
function game() {
    playRound();
}

// Plays one round and determines winner after
function playRound() {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

}

// Function to get entry from player
function playerPlay () {

}

// Get random entry from computer
function computerPlay() {
    // Randomly select from choices array
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}