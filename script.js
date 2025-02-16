// Track scores
let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

// Function to get human choice
function getHumanChoice() {
  let userInput = prompt(
    "Enter your choice: rock, paper, or scissors"
  ).toLowerCase();

  // Validate input
  while (!choices.includes(userInput)) {
    userInput = prompt(
      "Invalid choice! Please enter rock, paper, or scissors"
    ).toLowerCase();
  }

  return userInput;
}

// Function to get computer choice
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  // Determine winner
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }

  // Display updated scores
  console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

// Function to play the game for a set number of rounds
function playGame(rounds = 5) {
  console.log("Welcome to Rock, Paper, Scissors!");

  for (let i = 0; i < rounds; i++) {
    console.log(`Round ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Final result
  console.log("Game Over!");
  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer wins the game!");
  } else {
    console.log("🤝 It's a tie game!");
  }
}

// Start the game
playGame();
