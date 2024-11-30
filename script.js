// // Elements to display the scores
// const scoreDisplay = document.querySelector('.text h1');
// let userScore = 0;
// let computerScore = 0;

// // Define choices
// const choices = ["stone", "paper", "scissors"];
// const buttons = document.querySelectorAll(".image button");

// // Get a random choice for the computer
// function getComputerChoice() {
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// // Determine the winner and update scores
// function playGame(playerChoice) {
//     const computerChoice = getComputerChoice();

//     if (playerChoice === computerChoice) {
//         alert("It's a tie!");
//     } else if (
//         (playerChoice === "stone" && computerChoice === "scissors") ||
//         (playerChoice === "paper" && computerChoice === "stone") ||
//         (playerChoice === "scissors" && computerChoice === "paper")
//     ) {
//         userScore++;
//         alert("You win this round!");
//     } else {
//         computerScore++;
//         alert("Computer wins this round!");
//     }

//     // Update the score display
//     scoreDisplay.textContent = `User: ${userScore} - Computer: ${computerScore}`;
// }

// // Add event listeners to each button for player choice
// buttons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//         playGame(choices[index]);
//     });
// });
