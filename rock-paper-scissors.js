//SET VARIABLES
////////////////////////////
  const winningScore = 5;
  var humanPoints = 0;
  var computerPoints = 0;
  var options = 3;
  var run = true;
  var humanChose;
  var computerChose;
////////////////////////////

//START THE CODE
document.addEventListener("DOMContentLoaded", () => {
  attachEvent();
});

//ADD 'CLICK' TO ALL BUTTONS
function attachEvent() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      run = playTo(winningScore);
      if (run) playGame(button.id);
    });
  });
}

function playTo(bestOf){
  return (humanPoints<bestOf && computerPoints<bestOf)
  }

function playGame(humanChoice){
  //Check Winner of Round
  var roundWinner = playRound(humanChoice);
  //Allocate winner + 1
  updateScoreboard(roundWinner);
  //OUTPUT SCOREBOARD AND SELECTION
  output();
  //CHECK IF GAME IS OVER
  checkWinner();
}

function checkWinner() {
  if (isAWinner()) {
    let gameWinner = humanPoints === winningScore ? "Human Wins" : "Computer Wins";
    let winnerColor = humanPoints === winningScore ? 2 : 3;
    console.log(gameWinner)
    displayWinner(gameWinner, winnerColor);
  }
}

function isAWinner() {
  return humanPoints === winningScore || computerPoints === winningScore;
}

//BUTTON SELECTED IS COMPARED TO COMPUTER CHOICE
function playRound(humanChoice) {
  computerChose = getComputerChoice();
  humanChose = humanChoice;
  determineWinner(computerChose, humanChose);
}

function determineWinner(computerChose, humanChose) {
  if (computerChose === humanChose) return "Draw";

  const winMap = {
    Rock: "Scissors",    // Rock beats Scissors
    Paper: "Rock",       // Paper beats Rock
    Scissors: "Paper"    // Scissors beat Paper
  };

  return winMap[humanChose] === computerChose ? "Human" : "Computer";
}

function updateScoreboard(roundWinner) {
  const scoreActions = {
    Draw: () => {},                    // Do nothing for a draw
    Human: () => humanPoints += 1,      // Increment human points
    Computer: () => computerPoints += 1 // Increment computer points
  };
  if (scoreActions[roundWinner]) {
    scoreActions[roundWinner]();        // Call the appropriate action based on the winner
  }
}

function output() {
  displayChoices();
  displayScore();
}

function displayChoices() {
  let div = document.getElementById("chosenDiv");

  if (!div) {
    div = document.createElement("div");
    div.id = "chosenDiv";
    div.style.cssText = "color: blue; font-weight: bold; margin: 20px; font-size: 30px";
    document.body.appendChild(div);
  }

  class choiceSpan {
    text;
    style = {
      cssText
    }

    constructor(text, cssText) {
      this.text = text;
      this.style.cssText = cssText;
    }

    createSpan() {
      const span = document.createElement("span");
      span.textContent = this.text;
      span.style.cssText = this.style;
      return span;
    }
  }

  const humanChoiceSpan = new choiceSpan(
    `You Chose: ${humanChose}`, 
    "color: green; border: 2px solid pink; display: inline-block; margin-bottom: 10px;"
  ).createSpan();

  const computerChoiceSpan = new choiceSpan(
    `Computer Chose: ${computerChose}`, 
    "color: red; border: 2px solid pink; display: inline-block; "
  ).createSpan();

  div.replaceChildren(humanChoiceSpan, document.createElement("br"), computerChoiceSpan);
}

function displayScore() {
  const display = document.querySelector("#scoreDisplay");
  display.textContent =
    "Computer: " + computerPoints + " Human: " + humanPoints;
}

function divModifier(divId, css) {
  let div = document.getElementById(divId);

  if (!div) {
    div = document.createElement("div");
    div.id = divId;
    if (css) {
      div.style.cssText = css;
    }
    document.body.appendChild(div);
  }
}

function displayWinner(winner, color) {
  let div = divModifier("winner");

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

// function for combining computer choice (allows for methods to be separate)
function getComputerChoice() {
  let number = Math.ceil(Math.random() * options);
  let computerChoice = gameAdapter[number];
  return computerChoice;
}

//This function adapts the random number (1-3) and converts to a choice
const gameAdapter = {
  1: "Rock",
  2: "Paper",
  3: "Scissors"
}
