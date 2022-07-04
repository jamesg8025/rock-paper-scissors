const lose1 = 'You Lose! Paper beats Rock!'
const lose2 = 'You Lose! Rock beats Scissors!'
const lose3 = 'You Lose! Scissors beats Paper!'
const win1 = 'You Win! Paper beats Rock!'
const win2 = 'You Win! Rock beats Scissors'
const win3 = 'You Win! Scissors beats Paper!'
const draw = 'Draw! You both picked the same!'

// Create array of possible choices - all lowercase
const choices = ['rock', 'paper', 'scissors']
// Create empty array to log winners
const winners = []

let playerScore = 0;
let computerScore = 0;

// Function to loop through five rounds and decide game winner
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(i);
    }
    logWins();
    // computerScore = trackComputerScore();
    // playerScore = trackPlayerScore();
    if (playerScore < computerScore) {
        console.log('Sorry! Computer wins!');
    } else if (playerScore > computerScore){
        console.log('Congrats! You win!');
    } else {
        console.log('Tie!');
    }
}

// Plays one round and determines winner after
function playRound() {
    const playerSelection = playerPlay();
    console.log('You chose:', playerSelection);
    const computerSelection = computerPlay();
    console.log('Computer chose:', computerSelection);
    const roundWinner = checkRoundWin(playerSelection, computerSelection);
    console.log(roundWinner);
    const winner = checkRoundWin(playerSelection, computerSelection);
    // This function pushes a new winner into the winners array
    winners.push(winner);

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
    return playerChoice;
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

// Take the user's entry and compare to computer's entry to see who wins after a single round
function checkRoundWin(choiceP, choiceC) {
    // Win/loss case messages
    // const lose1 = 'You Lose! Paper beats Rock!'
    // const lose2 = 'You Lose! Rock beats Scissors'
    // const lose3 = 'You Lose! Scissors beats Paper!'
    // const win1 = 'You Win! Paper beats Rock!'
    // const win2 = 'You Win! Rock beats Scissors'
    // const win3 = 'You Win! Scissors beats Paper!'
    // const draw = 'Draw! You both picked the same!'

    // Win/Loss if cases
    if (choiceP === 'rock' && choiceC === 'paper') {
        computerScore++;
        return lose1;
    }
    if (choiceP === 'scissors' && choiceC === 'rock') {
        computerScore++;
        return lose2;
    }
    if (choiceP === 'paper' && choiceC === 'scissors') {
        computerScore++;
        return lose3;
    }
    if (choiceP === 'paper' && choiceC === 'rock') {
        playerScore++;
        return win1;
    }
    if (choiceP === 'rock' && choiceC === 'scissors') {
        playerScore++;
        return win2;
    }
    if (choiceP === 'scissors' && choiceC === 'paper') {
        playerScore++;
        return win3;
    }
    if (choiceP === choiceC) {
        return draw;
    }
}

// function trackComputerScore() {
//     let computerScore = 0;
//     const playerSelection = playerPlay();
//     const computerSelection = computerPlay();

//     if (checkRoundWin(playerSelection, computerSelection) === lose1 || 
//     checkRoundWin(playerSelection, computerSelection) === lose2 || 
//     checkRoundWin(playerSelection, computerSelection) === lose3) {
//         computerScore++;
//     }
//     console.log(computerScore);
//     return computerScore;
// }

// function trackPlayerScore() {
//     let playerScore = 0;
//     const playerSelection = playerPlay();
//     const computerSelection = computerPlay();

//     if (checkRoundWin(playerSelection, computerSelection) === win1 || 
//     checkRoundWin(playerSelection, computerSelection) === win2 || 
//     checkRoundWin(playerSelection, computerSelection) === win3) {
//         playerScore++;
//     }
//     console.log(playerScore);
//     return playerScore;
// }

// This function logs and displays winners in the console
function logWins() {
    console.log(winners);
}

game();