let rock = document.querySelector('#rock');
let scissors = document.querySelector('#scissors');
let paper = document.querySelector('#paper');

let playerChoice;
let computerChoice;
let winner = document.querySelector('#winner');
let announcement = document.querySelector('#announcement');

// Computer chooses value
let computerNumber = function () {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            randomNumber = 'rock';
            break;
        case 1:
            randomNumber = 'scissors';
            break;
        case 2:
            randomNumber = 'paper';
            break;
        default:
            break;
    }
    return randomNumber;
}


// Player chooses rock
rock.addEventListener('click', () => {
    playerChoice = 'rock';
    computerChoice = computerNumber();
    switch (computerChoice) {
        case 'rock':
            choiceAnnouncement();
            tie();
            break;
        case 'scissors':
            choiceAnnouncement();
            playerWins();
            break;
        case 'paper':
            choiceAnnouncement();
            computerWins();
            break;
        default:
            break;
    }
});

// Player chooses scissors
scissors.addEventListener('click', () => {
    playerChoice = 'scissors';
    computerChoice = computerNumber();
    switch (computerChoice) {
        case 'rock':
            choiceAnnouncement();
            computerWins();
            break;
        case 'scissors':
            choiceAnnouncement();
            tie();
            break;
        case 'paper':
            choiceAnnouncement();
            playerWins();
            break;
        default:
            break;
    }
});

// Player chooses paper
paper.addEventListener('click', () => {
    playerChoice = 'paper';
    computerChoice = computerNumber();
    switch (computerChoice) {
        case 'rock':
            choiceAnnouncement();
            playerWins();
            break;
        case 'scissors':
            choiceAnnouncement();
            computerWins();
            break;
        case 'paper':
            choiceAnnouncement();
            tie();
            break;
        default:
            break;
    }
});


// Announcement of the winner
const choiceAnnouncement = () => {
    announcement.textContent = `Player chose: ` + playerChoice + ` - Computer chose: ` + computerChoice;
}

const playerWins = () => {
    winner.textContent = 'Player wins!';
}

const computerWins = () => {
    winner.textContent = 'Computer wins!';
}

const tie = () => {
    winner.textContent = `It's a tie!`;
}