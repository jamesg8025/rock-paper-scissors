// Create empty array to log winners
const winners = []

let playerScore = 0;
let computerScore = 0;

// reset game
function resetGame() {

}

// Play game until someone wins 5 times
function startGame() {
    // this will grab all button tags in html
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => 
    button.addEventListener(('click'), () => {
        if (button.id) {
            playRound(button.id);
        }
    }))
}

// // Play game until someone wins 5 times
// function game() {
//     // Compare the two scores after five rounds and determine who won the game
//     if (playerScore < computerScore) {
//         console.log('Sorry! Computer wins the game!');
//     } else if (playerScore > computerScore){
//         console.log('Congrats! You win the game!');
//     } else {
//         console.log('Tie!');
//     }
// }

// Plays one round and determines winner after
function playRound(playerSelection) {
    // first check if anyone has 5 wins or not
    let wins = checkWins();
    if (wins >= 5) {
        return;
    }

    const computerSelection = computerPlay();
    console.log('Computer chose:', computerSelection);
    const roundWinner = checkRoundWin(playerSelection, computerSelection);
    console.log(roundWinner);
    const winner = checkRoundWin(playerSelection, computerSelection);
    // This function pushes a new winner into the winners array
    winners.push(winner);
    // This function updates scores
    tallyWins();
    // Function displays what each player chose
    displayRound(playerSelection, computerSelection, winner);
}



function tallyWins() {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    const draws = winners.filter((item) => item == 'Tie').length;
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.draws').textContent = `Score: ${draws}`;
}

function checkWins() {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    return Math.max(pWinCount, cWinCount); // this function returns the highest of two parameters
}

// Get random entry from computer
function computerPlay() {
    // TODO: update DOM with computer selection
    // Randomly select from choices array
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// Take the user's entry and compare to computer's entry to see who wins after a single round
function checkRoundWin(choiceP, choiceC) {
    // Win/loss case messages
    const lose1 = 'You Lose! Paper beats Rock!'
    const lose2 = 'You Lose! Rock beats Scissors'
    const lose3 = 'You Lose! Scissors beats Paper!'
    const win1 = 'You Win! Paper beats Rock!'
    const win2 = 'You Win! Rock beats Scissors'
    const win3 = 'You Win! Scissors beats Paper!'
    const draw = 'Draw! You both picked the same!'

    // Win/Loss if cases also increment scores
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

function setWins() {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    const draws = winners.filter((item) => item == 'Tie').length;
}

// const buttons = document.querySelectorAll('button');

// buttons.addEventListener('click', () => {
//     if (buttons.id) {
//         playRound(buttons.id);
//     }
// });


// // This function logs and displays winners in the console
// function logWins() {
//     console.log(winners);
// }
startGame();

// game();