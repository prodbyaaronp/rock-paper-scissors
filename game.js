let computerScore = 0
let playerScore = 0
const buttons = document.querySelectorAll("input")

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor((Math.random() * choices.length))];
};


function gameOver() {
    buttons.forEach(elem => {
        elem.disabled = true
    }) 
}

function playRound(playerSelection) {

    let computerSelection = getComputerChoice()
    
    const result = document.querySelector("#result")
    result.textContent = ""
    
    const scoreboard = document.querySelector("#scoreboard")
    scoreboard.textContent = ""

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
    
        playerScore += 1
        result.textContent = ("You Win! " + playerSelection + " beats " + computerSelection) 
        scoreboard.textContent = ("Player score: " + playerScore + " Computer score: " + computerScore)

        if (playerScore == 5) {
            result.textContent += "Congratulations! You won the game! Refresh the page to play again"
            gameOver()
        }
    }

    else if ((playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        
        computerScore += 1
        result.textContent = ("You lose " + computerSelection + " beats " + playerSelection)
        scoreboard.textContent = ("Player score: " + playerScore + " Computer score: " + computerScore)


        if (computerScore == 5) {
            result.textContent += " Sorry, you lost the game! Refresh the page to play again."
            gameOver()
        }
    }
   
    else if (playerSelection == computerSelection) {
        result.textContent = ("You tied! You both selected " + playerSelection + " try again")
    }
    
    else {
        result.textContent += "You must choose rock, paper or scissors"
    }

    return
};

buttons.forEach(button => {
    button.addEventListener("click", function(){
        playRound(button.value)
    })
})