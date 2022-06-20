//Variables
let playerScore = 0;
let computerScore = 0;
let scores = 0;
let scoreboard = document.getElementById("scores");
let you = document.getElementById("you");
let bot = document.getElementById("bot");
const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");

//Button Selection
rock.addEventListener("click", function() {
    playerSelection = "Rock"
    game()
})
paper.addEventListener("click", function() {
    playerSelection = "Paper"
    game()
})
scissors.addEventListener("click", function() {
    playerSelection = "Scissors"
    game()
})

//Play Functions
function playerPlay() {
    return playerSelection;
}

function computerPlay() {
    const selection = ["Rock", "Paper", "Scissors"];
    const computerSelection = selection[Math.floor(Math.random() * selection.length)];
    return computerSelection;
}

//Actual Game
function round() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    you.textContent = "You: " + playerSelection;
    bot.textContent = "Bot: " + computerSelection;

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You Won this round!");
        playerScore ++;
        
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You Won this round!");
        playerScore ++;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You Won this round!");
        playerScore ++;
    } else if (playerSelection === computerSelection) {
        console.log("Draw!");
    } else {
        console.log("You Lost this round!");
        computerScore ++;
    }
}  

function game() {
    round()
    scoreboard.textContent = playerScore + " - " + computerScore;

    if (playerScore === 5) {
        scoreboard.textContent = "You Win!";
    } else if ( computerScore === 5) {
        scoreboard.textContent = "You Lose!";
    }
}
