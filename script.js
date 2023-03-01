const getUserChoice = (userInput) => {
  if (
    (userChoice === "rock") |
    (userChoice === "paper") |
    (userChoice === "scissors")
  ) {
    return userInput;
  } else {
    return "Choose either Rock, Paper, or Scissors";
  }
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (getUserChoice === getComputerChoice) {
    return "draw";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
        document.getElementById('')
      return "you lose";
    } else {
      return "you win";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "you lose";
    } else {
      return "you win";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "you lose";
    } else {
      return "you win";
    }
  }
};
const playGame = (choice) => {
    const userChoice = getUserChoice(choice);
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
