let computerScore = 0
let playerScore = 0

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor((Math.random() * choices.length))];
};

let computerSelection = getComputerChoice()
let playerSelection = prompt("rock, paper, scissors... shoot!").toLowerCase()
let roundWinner = ""

// plays a round of the game

let playRound = (playerSelection, computerSelection) => {


    if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
    
        playerScore++
        roundWinner = alert("You Win! " + playerSelection + " beats " + computerSelection)
    }

    else if ((playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        
        computerScore++
        roundWinner = alert("You lose " + computerSelection + " beats " + playerSelection)

    }
   
    else if (playerSelection == computerSelection) {
        roundWinner = ("You tied! You both selected " + playerSelection + " try again");
    }
    
    else {
        alert("You must choose rock, paper or scissors");
    }

    return playRound();

};

// console.log(playRound(playerSelection, computerSelection));

// game function

function game() {
   
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()


        if (playerScore === 5) {
            alert ("You win!")
    
            gameOver()
        }
    
        if (computerScore === 5) {
            alert ("You Lose!")
    
            gameOver()
        }

}

function gameOver() {
    return playerScore === 5 || computerScore === 5
}


