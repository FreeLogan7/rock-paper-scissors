//SET VARIABLES
////////////////////////////
  const bestOf = 5;
  var humanPoints = 0;
  var computerPoints = 0;
  var options =3;
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
      run = playTo(bestOf);
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
  if (humanPoints === bestOf || computerPoints === bestOf) {
    let gameWinner = humanPoints === bestOf ? "Human Wins" : "Computer Wins";
    let winnerColor = humanPoints === bestOf ? 2 : 3;
    console.log(gameWinner)
    displayWinner(gameWinner, winnerColor);
  }
}

//BUTTON SELECTED IS COMPARED TO COMPUTER CHOICE
function playRound(humanChoice) {
  computerChose = getComputerChoice();
  humanChose = humanChoice;
  if (computerChose === humanChose) return("Draw");
  else if ((computerChose == "Rock") & (humanChose == "Paper")) return("Human");
  else if ((computerChose == "Paper") & (humanChose == "Scissors")) return("Human");
  else if ((computerChose == "Scissors") & (humanChose == "Rock")) return("Human");
  else return "Computer";
}

function updateScoreboard(roundWinner) {
  switch (roundWinner) {
    case "Draw": {
      break;
    }
    case "Human": {
      humanPoints += 1;
      break;
    }
    case "Computer": {
      computerPoints += 1;
      break;
    }
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

  const span1 = document.createElement("span");
  span1.textContent = `You Chose: ${humanChose}`;
  span1.style.cssText =
    "color: green; border: 2px solid pink; display: inline-block; margin-bottom: 10px;";

  const span2 = document.createElement("span");
  span2.textContent = `Computer Chose: ${computerChose}`;
  span2.style.cssText =
    "color: red; border: 2px solid pink; display: inline-block; ";

  div.replaceChildren(span1, document.createElement("br"), span2);
}


function displayScore() {
  const display = document.querySelector("#scoreDisplay");
  display.textContent =
    "Computer: " + computerPoints + " Human: " + humanPoints;
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


// function for combining computer choice (allows for methods to be separate)
function getComputerChoice() {
  let number = random();
  let computerChoice = gameAdapter(number);
  return computerChoice;
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
