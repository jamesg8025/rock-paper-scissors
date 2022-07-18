const choices = ['rock', 'paper', 'scissors'];
// Create empty array to log winners
let winners = [];

// reset values
function resetGame() {
    winners = [];
    document.querySelector('.playerScore').textContent = 'Your Score: 0';
    document.querySelector('.computerScore').textContent = 'Computer Score: 0';
    document.querySelector('.draws').textContent = 'Draws: 0';
    document.querySelector('.winner').textContent = '';
    document.querySelector('.playerSelection').textContent = '';
    document.querySelector('.computerSelection').textContent = '';
    document.querySelector('.reset').style.display = 'none';
}

// Play game until someone wins 5 times
function startGame() {
    // this will grab all img tags in html
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) => 
    img.addEventListener(('click'), () => {
        if (img.id) {
            playRound(img.id);
        }
    }))
}

// Plays one round and determines winner after
function playRound(playerSelection) {
    // first check if anyone has 5 wins or not
    let wins = checkWins();
    if (wins >= 5) {
        return;
    }

    const computerSelection = computerPlay();
    const winner = checkWinner(playerSelection, computerSelection);
    // This function pushes a new winner into the winners array
    winners.push(winner);
    // This function updates scores
    tallyWins();
    // Function displays what each player chose
    displayRound(playerSelection, computerSelection, winner);
    wins = checkWins();
    if (wins == 5) {
        displayEnd();
    }
}

// display end results
function displayEnd() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    if (playerWins == 5) {        // change the text to display winner
        document.querySelector('.winner').textContent = 'Congratulations, You Won The Game!!!'
    } else {
        document.querySelector('.winner').textContent = 'Sorry, The Computer Won The Game!'
    }
    document. querySelector('.reset').style.display = 'flex';        // change the button to visible
}

function displayRound(playerSelection, computerSelection, winner) {
    document.querySelector('.playerSelection').textContent = `You Chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    document.querySelector('.computerSelection').textContent = `Computer Chose ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    document.querySelector('.winner').textContent = `Round Winner: ${winner}`;
    // Displays a better formatted message
    displayRoundWinner(winner);
}

function displayRoundWinner (winner) {
    if (winner == 'Player') {
        document.querySelector('.winner').textContent = 'You Won the Round!'
    } else if (winner == 'Computer'){
        document.querySelector('.winner').textContent = 'Computer Won the Round!'
    } else {
        document.querySelector('.winner').textContent = 'The Round was a Draw.'
    }
}

function tallyWins() {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    const draws = winners.filter((item) => item == 'Draw').length;
    document.querySelector('.playerScore').textContent = `Your Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Computer Score: ${cWinCount}`;
    document.querySelector('.draws').textContent = `Draws: ${draws}`;
}

function checkWins() {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    return Math.max(pWinCount, cWinCount); // this function returns the highest of two parameters
}

// Get random entry from computer
function computerPlay() {
    // Randomly select from choices array
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // to temporarily change computer's choice class for css
    document.querySelector(`.${computerChoice}`).classList.add('active');
    // makes computer's choice temporarily bigger
    setTimeout(() => {
        document.querySelector(`.${computerChoice}`).classList.remove('active');
    }, 700);

    return computerChoice;
}

// Determine winner of a round
function checkWinner(choice1, choice2) {
    if (
        (choice1 == "rock" && choice2 == "scissors") ||
        (choice1 == "scissors" && choice2 == "paper") ||
        (choice1 == "paper" && choice2 == "rock")
    ) {
        return "Player";
    } else if (choice1 == choice2) {
        return "Draw";
    } else {
        return "Computer";
    }
}

function setWins() {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    const draws = winners.filter((item) => item == 'Draw').length;
}

startGame();