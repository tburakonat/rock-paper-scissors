const userSection = document.querySelector(".user-section")

userSection.addEventListener("click", function handleClick(e){
    if (e.target.id == "user-rock" || e.target.id == "user-paper" || e.target.id == "user-scissors") {
        let rock = document.getElementById("user-rock")
        let paper = document.getElementById("user-paper")
        let scissors = document.getElementById("user-scissors")
        let userSelection = document.getElementById(e.target.id)
        rock.style.backgroundColor = "#fff"
        rock.style.transform = "scale(0.9)"
        paper.style.backgroundColor = "#fff"
        paper.style.transform = "scale(0.9)"
        scissors.style.backgroundColor = "#fff"
        scissors.style.transform = "scale(0.9)"
        userSelection.style.backgroundColor = "red"
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
    let userSelection = userPlay.innerText.toLowerCase()
    winner = determineWinner(computerSelection, userSelection)
    round ++
    if (winner === "user") {
        userScore ++
    } else if (winner === "computer") {
        computerScore ++
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
    rock.style.backgroundColor = "#fff"
    rock.style.transform = "scale(0.9)"
    paper.style.backgroundColor = "#fff"
    paper.style.transform = "scale(0.9)"
    scissors.style.backgroundColor = "#fff"
    scissors.style.transform = "scale(0.9)"
    pcSelection.style.backgroundColor = "red"
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
    console.log(gameInfo)
    console.log(`User Score: ${gameInfo.userScore}`)
    console.log(`Computer Score: ${gameInfo.computerScore}`)
    if (gameInfo.userScore > gameInfo.computerScore) {
        console.log("You win!")
    } else {
        console.log("Computer wins!")
    }
}