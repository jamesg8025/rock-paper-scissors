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

// Function to get player's entry
function playerPlay () {
    let playerChoice = prompt('Choose: Rock, Paper, or Scissors');
    // This is in case player presses 'Cancel'
    while (playerChoice == null) {
        playerChoice = prompt('Choose something! Rock, Paper, or Scissors');
    }
    playerChoice = playerChoice.toLowerCase();
    let check = validatePlayerChoice(playerChoice);
    // In case user entry is not in choices array
    while (check == false) {
        // Reassign playerChoice to whatever they type based on the prompt - this stops the infinite reprompting
        playerChoice = prompt('Must choose between: Rock, Paper or Scissors!');
        while (playerChoice == null) {
            playerChoice = prompt('Choose something! Rock, Paper, or Scissors');
        }
        playerChoice = playerChoice.toLowerCase();
        check = validatePlayerChoice(playerChoice);
    }
    // console.log(playerChoice);
}

// Validate user input is in choices array
function validatePlayerChoice(choice) {
    return choices.includes(choice);
}

// Get random entry from computer
function computerPlay() {
    // Randomly select from choices array
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

game();