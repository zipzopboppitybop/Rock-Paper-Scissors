
let playerSelection = prompt();
playerSelection = playerSelection.toLowerCase();
let playerScore = 0
let computerScore = 0

function computerPlay() {
    const selection = ["rock", "paper", "scissors"];
    const computerSelection = selection[Math.floor(Math.random() * selection.length)];
    return computerSelection
}


function round() {
    let computerSelection = computerPlay()
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
        console.log("Draw");
    } else {
        console.log("You Lost this round!");
        computerScore ++;
    }
}  

function game() {
    for (let i = 0; i < 5; i++) {
        round()
     }
     console.log(playerScore, computerScore);
     if (playerScore > computerScore) {
        console.log("You Win!");
     } else if (playerScore < computerScore) {
        console.log("You Lose!");
     }
}

game()