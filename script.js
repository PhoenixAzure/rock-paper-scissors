function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors!").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    console.log("Try again!");
    return getHumanChoice();
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Tie! Both chose ${humanChoice}.`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`Win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
  } }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    console.log(`Player: ${humanSelection}`)
    const computerSelection = getComputerChoice();
    console.log(`Computer: ${computerSelection}`)
    playRound(humanSelection, computerSelection);
    console.log(`Current Score - Player: ${humanScore}, Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You won the game! Congratulations!");
  } else if (computerScore > humanScore) {
    console.log("Game over. You lost the game!");
  } else {
    console.log("The game was a draw.");
  }
}

playGame();