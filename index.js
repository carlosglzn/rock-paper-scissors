// Function to choose 'rock', 'paper' or 'scissors' from user
const getUserChoice = (userInput) => {
  userInput.toLowerCase(); // all lowercase
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

// Function to choose randomnly 'rock', 'paper' or 'scissors' from the computer
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// Function to determine a winner
const determineWinner = (userChoice, computerChoice) => {
  // Tie
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  // Rock case
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  // Paper case
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  // Scissors Case
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  // Cheat code
  if (userChoice === "bomb") {
    return "You won!";
  }
};

// Function to play the game
const playGame = (user) => {
  const userChoice = getUserChoice(user);
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

// Test
playGame("paper");
playGame("rock");
playGame("scissors");
playGame("bomb");
