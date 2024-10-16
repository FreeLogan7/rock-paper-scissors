//VARIABLES
const bestOf = 5;
var options = 3;
var humanPoints = 0;
var computerPoints = 0;
var humanChose;
var computerChose;

//START THE CODE

//Set # of games
var run = playTo(bestOf);

//Attach & GET id of 'Click'
if (run) {
  let humanChoice = attachEvent();

  //Get Round Winner WITH id
  //roundWinner = 1, 2, or 3
  var roundWinner = playRound(humanChoice);

  //update Scoreboard!!
  updateScoreboard(roundWinner);

  var winner = whoWon(roundWinner);

  //Get ROUND Winner -- IF GAME IS OVER DISPLAY Final WINNER
  output(winner, roundWinner);



}
//whoWon 
whoWon(roundWinner)
{
  switch (roundWinner){
    case(1): {return "DRAW"}
    case(2): {return "Human"}
    case(3): {return "Computer"}
  }
}




function playTo(bestOf){
return (humanPoints<5 && computerPoints<5)
}

//ADD 'CLICK' TO ALL BUTTONS
function attachEvent() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
        return button.id;
    });
  });
}

//BUTTON SELECTED IS COMPARED TO COMPUTER CHOICE
function playRound(humanChoice) {
  this.computerChose = getComputerChoice();
  this.humanChose = humanChoice;
  if (computerChose === humanChose) return(1);
  else if ((computerChose == "Rock") & (humanChose == "Paper")) return(2);
  else if ((computerChose == "Paper") & (humanChose == "Scissors")) return(2);
  else if ((computerChose == "Scissors") & (humanChose == "Rock")) return(2);
  else if ((computerChose == "Rock") & (humanChose == "Scissors")) return(3);
  else if ((computerChose == "Paper") & (humanChose == "Rock")) return(3);
  else if ((computerChose == "Scissors") & (humanChose == "Paper")) return(3);
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



// function for combining computer choice (allows for methods to be separate)
function getComputerChoice() {
  let number = random();
  let computerChoice = gameAdapter(number);
  return computerChoice;
}

function updateScoreboard(roundWinner) {
  switch (roundWinner) {
    case 1: {
      break;
    }
    case 2: {
      this.humanPoints = +humanPoints + 1;
      break;
    }
    case 3: {
      this.computerPoints = +computerPoints + 1;
      break;
    }
  }
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
