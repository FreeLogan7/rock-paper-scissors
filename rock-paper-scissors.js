
//RANDOMIZER
var options = 3;

function random(){
let x = Math.ceil(Math.random() * options);
return x;
}

var ans = random();
console.log(ans);