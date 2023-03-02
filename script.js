const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper"
  ) {
    return userInput;
  } else {
    console.log("Error, please type:rock, paper, or scissors.");
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
  if (userChoice === computerChoice) {
    document.getElementById('winner').src = assets/error.png
    return "This game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      document.getElementById('winner').src = assets/paper.png
      return "Sorry, computer won!";
    } else {
      document.getElementById('winner').src = assets/rock.png
      return "Congratulations, you won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      document.getElementById('winner').src = assets/scissor.png
      return "Sorry, computer won!";
    } else {
      document.getElementById('winner').src = assets/paper.png
      return "Congratulations, you won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      document.getElementById('winner').src = assets/rock.png
      return "Sorry, computer won!";
    } else {
      document.getElementById('winner').src = assets/scissor.png
      return "Congratulations, you won!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
