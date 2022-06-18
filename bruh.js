const selection = ["rock", "paper", "scissors"];
const computerSelection = selection[Math.floor(Math.random() * selection.length)];
let playerSelection = prompt();
playerSelection = playerSelection.toLowerCase();
const computer = computerPlay();

function computerPlay() {
    return computerSelection
}

function round() {
    computerPlay()
    console.log("You:" + playerSelection + " vs " + "Bot:" + computerSelection);

    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win!");
    } else if (playerSelection === computerSelection) {
        console.log("Draw");
    } else {
        console.log("You Lose!");
    }

}  

round()

