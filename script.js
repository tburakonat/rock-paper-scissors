const userSection = document.querySelector(".user-section")
const userScoreDisplay = document.getElementById("user-score")
const computerScoreDisplay = document.getElementById("computer-score")

userSection.addEventListener("click", function handleClick(e){
    if (e.target.id == "rock" || e.target.id == "paper" || e.target.id == "scissors") {
        let rock = document.getElementById("rock")
        let paper = document.getElementById("paper")
        let scissors = document.getElementById("scissors")
        let userSelection = document.getElementById(e.target.id)
        rock.style.backgroundColor = "#eee"
        rock.style.transform = "scale(0.9)"
        paper.style.backgroundColor = "#eee"
        paper.style.transform = "scale(0.9)"
        scissors.style.backgroundColor = "#eee"
        scissors.style.transform = "scale(0.9)"
        userSelection.style.backgroundColor = "#49be25"
        userSelection.style.transform = "scale(1.1)"
        let gameInfo = playRound(computerPlay, userSelection)
        if (gameInfo.userScore === 5 || gameInfo.computerScore === 5) {
            finishGame(gameInfo)
            userSection.removeEventListener("click", handleClick)
        }
    }
})

let winner = ""
let userScore = 0
let computerScore = 0
let round = 0
let gameInfo = {}

function playRound(computerPlay, userPlay) {
    let computerSelection = computerPlay()
    let userSelection = userPlay.id.toLowerCase()
    winner = determineWinner(computerSelection, userSelection)
    round ++
    if (winner === "user") {
        userScore ++
        userScoreDisplay.textContent = userScore
    } else if (winner === "computer") {
        computerScore ++
        computerScoreDisplay.textContent = computerScore
    }
    let roundInfo = {
       winner,
       userScore,
       computerScore,
       round
    }
    gameInfo = roundInfo
    return gameInfo
}

function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3)
    let computerSelection
    if (randomNum == 0) {
        computerSelection = "rock"
    } else if (randomNum == 1) {
        computerSelection = "paper"
    } else {
        computerSelection = "scissors"
    }
    let rock = document.getElementById("pc-rock")
    let paper = document.getElementById("pc-paper")
    let scissors = document.getElementById("pc-scissors")
    const pcSelection = document.getElementById(`pc-${computerSelection}`)
    rock.style.backgroundColor = "#eee"
    rock.style.transform = "scale(0.9)"
    paper.style.backgroundColor = "#eee"
    paper.style.transform = "scale(0.9)"
    scissors.style.backgroundColor = "#eee"
    scissors.style.transform = "scale(0.9)"
    pcSelection.style.backgroundColor = "#49be25"
    pcSelection.style.transform = "scale(1.1)"
    return computerSelection.toLowerCase()
}

function determineWinner(computerSelection, userSelection) {
    if (computerSelection === userSelection) {
        return "draw"
    } else if (computerSelection === "paper" && userSelection === "rock" || 
                computerSelection === "rock" && userSelection === "scissors" || 
                    computerSelection === "scissors" && userSelection === "paper") {
        return "computer"
    } else {
        return "user"
    }
}

function finishGame(gameInfo) {
    if (gameInfo.userScore > gameInfo.computerScore) {
        userScoreDisplay.style.color = "#49be25"
        computerScoreDisplay.style.color = "#d62828"
    } else {
        computerScoreDisplay.style.color = "#49be25"
        userScoreDisplay.style.color = "#d62828"
    }
}