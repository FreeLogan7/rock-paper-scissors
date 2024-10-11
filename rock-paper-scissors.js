
//RANDOMIZER
var options = 3;
var humanPoints = 0;
var computerPoints = 0;
var humanChose ;
var computerChose;
attachEvent();


function attachEvent(){
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
button.addEventListener("click", () => {
playRound(button.id);
})
});
}

function playRound(humanChoice){
        this.computerChose = getComputerChoice();
        this.humanChose = humanChoice;
        if (computerChose === humanChose) result(1)
            else if (computerChose == "Rock" & humanChose == "Paper") result(2)
            else if (computerChose == "Paper" & humanChose == "Scissors") result(2)
            else if (computerChose == "Scissors" & humanChose == "Rock") result(2)
            else if (computerChose == "Rock" & humanChose == "Scissors") result (3)
            else if (computerChose == "Paper" & humanChose == "Rock") result (3)
            else if (computerChose == "Scissors" & humanChose == "Paper") result (3)
}

function output(winner){
displayChoices();
displayWinner(winner);
displayScore();
}

function displayChoices(){
let div = document.getElementById("chosenDiv");

const text1 = `You Chose: ${this.humanChose}`;
const text2 = `Computer Chose: ${this.computerChose}`;

if (!div){
div = document.createElement("div");
div.id = "chosenDiv";
div.style.cssText = "color: blue; background: white;";
document.body.appendChild(div);
}

 div.replaceChildren(
        document.createTextNode(text1),
        document.createElement("br"),
        document.createTextNode(text2)
    );
}

function displayWinner(winner) {
alert(winner);
}

function displayScore(){
const ans = document.querySelector("ans");
ans.textContent = "Computer: " + computerPoints + " Human: " + humanPoints;
}

// function for combining computer choice (allows for methods to be separate)
function getComputerChoice (){
    let number = random();
    let computerChoice = gameAdapter(number);
    return computerChoice;
}


function result(result){
    switch(result){
        case(1):{
        output("DRAW");
            console.log("DRAW")
            console.log("Computer: " + computerPoints + " Human: " + humanPoints);
            break;
        }
        case(2): {
            this.humanPoints = +humanPoints + 1;
                    output("Human Wins");

            console.log("Human Wins: "+ humanChose + " beats " +computerChose)
            console.log("Computer: " + computerPoints + " Human: " + humanPoints);
            break;
         }
        case(3): {
            this.computerPoints = +computerPoints + 1;
                    output("Computer Wins");

            console.log("Computer Wins: " + computerChose + " beats " +humanChose);
            console.log("Computer: " + computerPoints + " Human: " + humanPoints);
            break;
         }
    }
}


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

//OLD -- UPDATE
//function getHumanChoice (){
//    let humanChoice = prompt("Rock, Paper, or Scissors");
//    humanChoice = humanChoice;
//    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
//    return humanChoice;
//}

