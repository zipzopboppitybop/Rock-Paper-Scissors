let playerScore = 0
let computerScore = 0

const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");

rock.addEventListener("click", function() {
    playerSelection = "rock"
    round()
})
paper.addEventListener("click", function() {
    playerSelection = "paper"
    round()
})
scissors.addEventListener("click", function() {
    playerSelection = "scissors"
    round()
})

function playerPlay() {
    return playerSelection;
}

function computerPlay() {
    const selection = ["rock", "paper", "scissors"];
    const computerSelection = selection[Math.floor(Math.random() * selection.length)];
    return computerSelection;
}

function round() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    console.log("You:" + playerSelection + " vs " + "Bot:" + computerSelection);

    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Won this round!");
        playerScore ++;
        
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Won this round!");
        playerScore ++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
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
    
    console.log(playerScore, computerScore);
    if (playerScore > computerScore) {
        console.log("You Win!");
    } else if (playerScore < computerScore) {
        console.log("You Lose!");
    } else {
        console.log("Draw!");
    }
}

