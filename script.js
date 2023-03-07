let pWins = 0;
let cWins = 0;

const getUserChoice = (userChoice) => {
  if (userChoice === "rock") {
    document.getElementById("rock").src = "rockActive.png";
    document.getElementById("scissors").src = "scissors.png";
    document.getElementById("paper").src = "paper.png";
    return userChoice;
  }

  if (userChoice === "scissors") {
    document.getElementById("scissors").src = "scissorsActive.png";
    document.getElementById("rock").src = "rock.png";
    document.getElementById("paper").src = "paper.png";
    return userChoice;
  }

  if (userChoice === "paper") {
    document.getElementById("paper").src = "paperActive.png";
    document.getElementById("rock").src = "rock.png";
    document.getElementById("scissors").src = "scissors.png";
    return userChoice;
  } else {
    console.log("Error, please type:rock, paper, or scissors.");
  }
};
//this is the image output for each click input
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
//this is the random selection of the computer
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    if (userChoice === "rock" && userChoice === computerChoice) {
      document.getElementById("winner").src = "error.png";
      document.getElementById("winnerTag").innerHTML = "No Winner!";
      document.getElementById("compImg").src = "rock.png";
      return "This game is a tie!";
    }
    if (userChoice === "paper" && userChoice === computerChoice) {
      document.getElementById("winner").src = "error.png";
      document.getElementById("winnerTag").innerHTML = "No Winner!";
      document.getElementById("compImg").src = "paper.png";
      return "This game is a tie!";
    }
    if (userChoice === "scissors" && userChoice === computerChoice) {
      document.getElementById("winner").src = "error.png";
      document.getElementById("winnerTag").innerHTML = "No Winner!";
      document.getElementById("compImg").src = "scissors.png";
      return "This game is a tie!";
    }
  }
  //this is the output of all values if the user input and computer input are the same
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      document.getElementById("winner").src = "paper.png";
      document.getElementById("compImg").src = "paper.png";
      document.getElementById("cWins").innerHTML = cWins++;
      document.getElementById("winnerTag").innerHTML = "Winner!";
      return "Sorry, computer won!";
    } else {
      document.getElementById("winner").src = "rock.png";
      document.getElementById("compImg").src = "scissors.png";
      document.getElementById("pWins").innerHTML = pWins++;
      document.getElementById("winnerTag").innerHTML = "Winner!";
      return "Congratulations, you won!";
    }
  }
//this is the output of all values in relation to a user rock input
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      document.getElementById("winner").src = "scissors.png";
      document.getElementById("compImg").src = "scissors.png";
      document.getElementById("winnerTag").innerHTML = "Winner!";
      document.getElementById("cWins").innerHTML = cWins++;
      return "Sorry, computer won!";
    } else {
      document.getElementById("winner").src = "paper.png";
      document.getElementById("compImg").src = "rock.png";
      document.getElementById("winnerTag").innerHTML = "Winner!";
      document.getElementById("pWins").innerHTML = pWins++;
      return "Congratulations, you won!";
    }
  }
//this is the output of all values in relation to a user paper input
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      document.getElementById("winner").src = "rock.png";
      document.getElementById("compImg").src = "rock.png";
      document.getElementById("winnerTag").innerHTML = "Winner!";
      document.getElementById("cWins").innerHTML = cWins++;
      return "Sorry, computer won!";
    } else {
      document.getElementById("winner").src = "scissors.png";
      document.getElementById("compImg").src = "paper.png";
      document.getElementById("winnerTag").innerHTML = "Winner!";
      document.getElementById("pWins").innerHTML = pWins++;
      return "Congratulations, you won!";
    }
  }
};
//this is the output of all values in relation to a user scissors input
const playGame = (choice) => {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();
  let ratio = (pWins / cWins).toFixed(2);
  console.log(ratio);
  document.getElementById("ratio").innerHTML = ratio;
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
//this block of code will set the values of computer and user choice
playGame();
