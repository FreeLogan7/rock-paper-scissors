
//RANDOMIZER
var options = 3;

function random(){
let randomNumber = Math.ceil(Math.random() * options);
return randomNumber;
}

//incomplete function for combining computer choice (allows for methods to be seperate)
// function computerChoice (){
//     let number = random()
// }

//This function adapts the random number (1-3) and converts to a choice
function gameAdapter(num){
   switch(num){
        case(1): return console.log("Rock");
        case(2): return console.log("Paper"); 
        case(3): return console.log("Scissors"); 
    }
    return null;
    
}