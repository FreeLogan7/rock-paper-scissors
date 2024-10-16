//RANDOMIZER
var options = 3;
var humanPoints = 0;
var computerPoints = 0;
var humanChose;
var computerChose;
attachEvent();

function attachEvent() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      while (winner == false) {
        playRound(button.id);
      }
    });
  });
}

function playRound(humanChoice) {
  this.computerChose = getComputerChoice();
  this.humanChose = humanChoice;
  if (computerChose === humanChose) result(1);
  else if ((computerChose == "Rock") & (humanChose == "Paper")) result(2);
  else if ((computerChose == "Paper") & (humanChose == "Scissors")) result(2);
  else if ((computerChose == "Scissors") & (humanChose == "Rock")) result(2);
  else if ((computerChose == "Rock") & (humanChose == "Scissors")) result(3);
  else if ((computerChose == "Paper") & (humanChose == "Rock")) result(3);
  else if ((computerChose == "Scissors") & (humanChose == "Paper")) result(3);
}

function output(winner, color) {
  displayChoices();
  displayWinner(winner, color);
  displayScore();
}

function displayChoices() {
  let div = document.getElementById("chosenDiv");

  if (!div) {
    div = document.createElement("div");
    div.id = "chosenDiv";
    div.style.cssText = "color: blue; font-weight: bold;";
    document.body.appendChild(div);
  }

  const span1 = document.createElement("span");
  span1.textContent = `You Chose: ${this.humanChose}`;
  span1.style.cssText =
    "color: green; border: 2px solid pink; display: inline-block;";

  const span2 = document.createElement("span");
  span2.textContent = `Computer Chose: ${this.computerChose}`;
  span2.style.cssText =
    "color: red; border: 2px solid pink; display: inline-block; ";

  div.replaceChildren(span1, document.createElement("br"), span2);
}

function displayWinner(winner, color) {
  let div = document.getElementById("winner");

  if (!div) {
    div = document.createElement("div");
    div.id = "winner";

    document.body.appendChild(div);
  }

  switch (color) {
    case 1: {
      div.style.cssText =
        "color: blue; font-weight: bold; border: 2px solid pink; display: inline-block";
      break;
    }
    case 2: {
      div.style.cssText =
        "color: green; font-weight: bold; border: 2px solid pink; display: inline-block";
      break;
    }
    case 3: {
      div.style.cssText =
        "color: red; font-weight: bold; border: 2px solid pink; display: inline-block";
      break;
    }
  }

  div.replaceChildren(winner);
}

function displayScore() {
  const display = document.querySelector("#scoreDisplay");
  display.textContent =
    "Computer: " + computerPoints + " Human: " + humanPoints;
}

// function for combining computer choice (allows for methods to be separate)
function getComputerChoice() {
  let number = random();
  let computerChoice = gameAdapter(number);
  return computerChoice;
}

function result(result) {
  switch (result) {
    case 1: {
      output("DRAW", 1);
      console.log("DRAW");
      console.log("Computer: " + computerPoints + " Human: " + humanPoints);
      break;
    }
    case 2: {
      this.humanPoints = +humanPoints + 1;
      output("Human Wins", 2);

      console.log("Human Wins: " + humanChose + " beats " + computerChose);
      console.log("Computer: " + computerPoints + " Human: " + humanPoints);
      break;
    }
    case 3: {
      this.computerPoints = +computerPoints + 1;
      output("Computer Wins", 3);

      console.log("Computer Wins: " + computerChose + " beats " + humanChose);
      console.log("Computer: " + computerPoints + " Human: " + humanPoints);
      break;
    }
  }
}

function random() {
  let randomNumber = Math.ceil(Math.random() * options);
  return randomNumber;
}

//This function adapts the random number (1-3) and converts to a choice
function gameAdapter(num) {
  switch (num) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

//OLD -- UPDATE
//function getHumanChoice (){
//    let humanChoice = prompt("Rock, Paper, or Scissors");
//    humanChoice = humanChoice;
//    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
//    return humanChoice;
//}
