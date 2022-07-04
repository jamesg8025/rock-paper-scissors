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
    while (playerChoice == null) {
        playerChoice = prompt('Choose: Rock, Paper, or Scissors');
    }
    playerChoice = playerChoice.toLowerCase();
    let check = validatePlayerChoice(playerChoice);
    while (check == false) {
        prompt('Must choose between: Rock, Paper or Scissors!');
        while (playerChoice == null) {
        playerChoice = prompt('Choose: Rock, Paper, or Scissors');
    }
        playerChoice = playerChoice.toLowerCase();
        check = validatePlayerChoice();
    }
    console.log(playerChoice);
}

// Validate user input is in choices array
function validatePlayerChoice(choice) {
    return (choices.includes(choice));
}

// Get random entry from computer
function computerPlay() {
    // Randomly select from choices array
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

game();