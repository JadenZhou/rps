function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getHumanChoice() {
  let input = prompt(
    'choice between "Rock", "Paper", and "Scissors"'
  ).toLowerCase;
  while (!(input === "rock" || input === "paper" || input === "scissors")) {
    input = prompt(
      'Invalid! choice between "Rock", "Paper", and "Scissors"'
    ).toLowerCase;
  }
  return input;
}

let humanScore = 0;
let computerScore = 0;

console.log("Hello World");

console.log(getComputerChoice());
console.log(getHumanChoice());
