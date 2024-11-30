// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["Stone", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to determine the winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
    if (
      (userChoice === "Stone" && computerChoice === "Scissors") ||
      (userChoice === "Paper" && computerChoice === "Stone") ||
      (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
      return "You Win!";
    }
    return "You Lose!";
  }
  
  // Main game logic
  document.addEventListener("DOMContentLoaded", () => {
    const userChoiceSpan = document.querySelector("#user-choice span");
    const computerChoiceSpan = document.querySelector("#computer-choice span");
    const resultSpan = document.querySelector("#game-result span");
  
    const buttons = document.querySelectorAll(".choices button");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const userChoice = button.textContent;
        const computerChoice = getComputerChoice();
  
        const result = determineWinner(userChoice, computerChoice);
  
        // Update the DOM
        userChoiceSpan.textContent = userChoice;
        computerChoiceSpan.textContent = computerChoice;
        resultSpan.textContent = result;
      });
    });
  });
  