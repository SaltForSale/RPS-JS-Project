let pWins = 0
let cWins = 0

const getUserChoice = (userChoice) => {
  if (
    (userChoice === "rock") |
    (userChoice === "scissors") |
    (userChoice === "paper")
  ) {
    return userChoice;
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
    document.getElementById("winner").src = 'error.png';
    return "This game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      document.getElementById("winner").src = 'paper.png';
      document.getElementById("compImg").src = 'paper.png';
      document.getElementById("cWins").innerHTML = cWins++;
      return "Sorry, computer won!";
    } else {
      document.getElementById("winner").src = 'rock.png';
      document.getElementById("winner").src = 'paper.png';
      document.getElementById("cWins").innerHTML = pWins++;
      return "Congratulations, you won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      document.getElementById("winner").src = 'scissors.png';
      document.getElementById("compImg").src = 'scissors.png';
      document.getElementById("cWins").innerHTML = cWins++;
      return "Sorry, computer won!";
    } else {
      document.getElementById("winner").src = 'paper.png';
      document.getElementById("winner").src = 'rock.png';
      document.getElementById("cWins").innerHTML = pWins++;
      return "Congratulations, you won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      document.getElementById("winner").src = 'rock.png';
      document.getElementById("compImg").src = 'rock.png';
      document.getElementById("cWins").innerHTML = cWins++;
      return "Sorry, computer won!";
    } else {
      document.getElementById("winner").src = 'scissors.png';
      document.getElementById("compImg").src = 'paper.png';
      document.getElementById("cWins").innerHTML = pWins++;
      return "Congratulations, you won!";
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

playGame();
