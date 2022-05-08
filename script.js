function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3)
    let computerSelection
    if (randomNum == 0) {
        computerSelection = "Rock"
    } else if (randomNum == 1) {
        computerSelection = "Paper"
    } else {
        computerSelection = "Scissors"
    }
    return computerSelection
}