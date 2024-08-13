
//RANDOMIZER
var options = 3;
var humanPoints = 0;
var computerPoints = 0;


function random(){
let randomNumber = Math.ceil(Math.random() * options);
return randomNumber;
}


//This function adapts the random number (1-3) and converts to a choice
function gameAdapter(num){
   switch(num){
        case(1): return "Rock";
        case(2): return "Paper"; 
        case(3): return "Scissors"; 
    }
   
}

// function for combining computer choice (allows for methods to be seperate)
function getComputerChoice (){
    let number = random();
    let computerChoice = gameAdapter(number);
    console.log ("The computer has selected: " + computerChoice);
}

function getHumanChoice (){
    let humanChoice = prompt("Rock, Paper, or Scissors");
    humanChoice = humanChoice;
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    console.log(humanChoice);
}


function addPoints (winner){
    winner = +winner + 1;
}
console.log(humanPoints);
addPoints(humanPoints);
console.log(humanPoints);
addPoints(humanPoints);
console.log(humanPoints);