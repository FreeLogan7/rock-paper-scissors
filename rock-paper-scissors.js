
//RANDOMIZER
var options = 3;
var humanPoints = 0;
var computerPoints = 0;
var humanChose ;
var computerChose;
var roundToPlay = 5;


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
    return computerChoice;
}

function getHumanChoice (){
    let humanChoice = prompt("Rock, Paper, or Scissors");
    humanChoice = humanChoice;
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    return humanChoice;
}


function playRound(){

    for (let i = 0; i <roundToPlay; i++){
        this.computerChose = getComputerChoice();
        this.humanChose = getHumanChoice();
        console.clear();

        output();

        if (computerChose === humanChose) result(1)
            else if (computerChose == "Rock" & humanChose == "Paper") result(2)
            else if (computerChose == "Paper" & humanChose == "Scissors") result(2)
            else if (computerChose == "Scissors" & humanChose == "Rock") result(2)
            else if (computerChose == "Rock" & humanChose == "Scissors") result (3)
            else if (computerChose == "Paper" & humanChose == "Rock") result (3)
            else if (computerChose == "Scissors" & humanChose == "Paper") result (3)

     }

}


function output(){
console.log("Computer Chose: "+ computerChose);
console.log("Human Chose: "+ humanChose);
}


function result(result){
    switch(result){
        case(1):{
            console.log("DRAW")
            console.log("Computer: " + computerPoints + " Human: " + humanPoints);
            break;
        }
        case(2): {
            this.humanPoints = +humanPoints + 1;
            console.log("Human Wins: "+ humanChose + " beats " +computerChose)
            console.log("Computer: " + computerPoints + " Human: " + humanPoints);
            break;
         }
        case(3): {
            this.computerPoints = +computerPoints + 1;
            console.log("Computer Wins: " + computerChose + " beats " +humanChose); 
            console.log("Computer: " + computerPoints + " Human: " + humanPoints);
            break;
         }
    }
}

playRound();