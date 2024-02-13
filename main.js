function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    const moves = ["rock", "paper", "scissors"]; 
    return moves[randomIndex]; 
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) { 
        return "Draw!";
    }

    if((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")) {
        return "Player wins!";
    }
    else if((computerSelection == "rock" && playerSelection == "scissors") || 
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")) {
        return "Computer wins!";
    }
}

function playGame() {

}