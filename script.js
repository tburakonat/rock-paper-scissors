const userSection = document.querySelector(".user-section")

userSection.addEventListener("click", function handleClick(e){
    if (e.target.id == "user-rock" || e.target.id == "user-paper" || e.target.id == "user-scissors") {
        userSection.removeEventListener("click", handleClick)
        let userSelection = document.getElementById(e.target.id)
        userSelection.style.backgroundColor = "#aaa"
        playRound(computerPlay, userSelection)
    }
})

function playRound(computerPlay, userPlay) {
    let computerSelection = computerPlay()
    let userSelection = userPlay.innerText.toLowerCase()
    determineWinner(computerSelection, userSelection)
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
    const pcSelection = document.getElementById(`pc-${computerSelection}`)
    pcSelection.style.backgroundColor = "#aaa"
    return computerSelection.toLowerCase()
}

function determineWinner(computerSelection, userSelection) {
    if (computerSelection === userSelection) {
        console.log("Draw")
    } else if (computerSelection === "paper" && userSelection === "rock" || computerSelection === "rock" && userSelection === "scissors") {
        console.log("PC Wins")
    } else {
        console.log("User Wins")
    }
}