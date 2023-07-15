//create counters
let counterPlayer = 5;
let counterComputer = 5;
//create  a function that randomly returns rock, paper and scissors
function computerChoice(){
//create a variable that generates random number from 1 to 3
let randomValue = Math.floor(Math.random()*3)+1;
//if random value is 1 return rock
if(randomValue == 1){
    return("rock");
}
//if random value is 2 return paper
if(randomValue == 2){
    return("paper");
}
//if random value is 3 return scissor
if(randomValue == 3){
    return("scissor");
}
}

/*create a function that plays a single round of game and 
it has two parameters-playerSelection and computerSelection*/
function gameRound(playerSelection ,computerSelection){
/*if playerSelection is equals to rock and computerSelection
 is equal to rock*/
if(playerSelection == "rock"&&computerSelection =="rock"){
    //increment and decrement of counters
counterPlayer=counterPlayer+1;
counterComputer=counterComputer+1;
 //return it's a tie b/w rocks !
return("It's a tie between Rocks");}

 /*if playerSelection is equals to paper and computerSelection
 is equal to rock*/ 
 if(playerSelection == "paper"&&computerSelection =="rock"){
     //increment and decrement of counters
counterPlayer=counterPlayer+1;
counterComputer=counterComputer-1;
 //return you won! paper beats rock
return("You won! Paper beats Rock");
 }
 /*if playerSelection is equals to scissor and computerSelection
 is equal to rock*/ 
 if(playerSelection == "scissor"&&computerSelection =="rock"){
     //increment and decrement of counters
 counterComputer=counterComputer+1;
 counterPlayer=counterPlayer-1;
 //return you lose ! scissor loses to rock
return("You lose! Scissor loses to Rock");
 }
 /*if playerSelection is equals to rock and computerSelection
 is equal to paper*/
 if(playerSelection == "rock"&&computerSelection =="paper"){
     //increment and decrement of counters
 counterComputer=counterComputer+1;
 counterPlayer=counterPlayer-1;
 //return you lose! rock loses to paper
return("You lose! Rock loses to Paper");
 }
/*if playerSelection is equals to rock and computerSelection
 is equal to scissor*/ 
 if(playerSelection == "rock"&&computerSelection =="scissor"){
     //increment and decrement of counters
counterPlayer=counterPlayer+1;
counterComputer=counterComputer-1;
 //return you won! rock beats scissors
return("You won! Rock beats Scissor");
}
/*if playerSelection is equals to paper and computerSelection
 is equal to paper*/ 
 if(playerSelection == "paper"&&computerSelection =="paper"){
     //increment and decrement of counters
counterPlayer=counterPlayer+1;
counterComputer=counterComputer+1;
 //return it's a tie b/w papers!
return("It's a tie between Papers");}

 /*if playerSelection is equals to scissors and computerSelection
 is equal to scissors*/ 
 if(playerSelection == "scissor"&&computerSelection== "scissor"){
     //increment and decrement of counters
counterPlayer=counterPlayer+1;
counterComputer=counterComputer+1;
 //return it's a tie b/w scissors
return("It's a tie between scissors");}

 /*if playerSelection is equals to paper and computerSelection
 is equal to scissor*/ 
 if(playerSelection == "paper"&&computerSelection =="scissor"){
     //increment and decrement of counters
 counterComputer=counterComputer+1;
 counterPlayer=counterPlayer-1;
 //return you lose! paper loses to scissor
return("You lose! Paper loses to scissor");
 }
 /*if playerSelection is equals to scissors and computerSelection
 is equal to paper*/ 
 if(playerSelection == "scissor"&&computerSelection =="paper"){
     //increment and decrement of counters
counterPlayer=counterPlayer+1;
counterComputer=counterComputer-1;
 //return you won! scissor beats paper
return("You won! Scissor beats Paper");
}
 }
 //assign the value of playerChoice 
let playerChoice = prompt("Please select - Rock , Paper or Scissor").toLowerCase() ;

 /*print the above function 5 times using console.log and initialize the arguments
  in the parameter of the above function*/
console.log(gameRound(playerChoice,computerChoice()));
console.log(gameRound(playerChoice,computerChoice()));
console.log(gameRound(playerChoice,computerChoice()));
console.log(gameRound(playerChoice,computerChoice()));
console.log(gameRound(playerChoice,computerChoice()));
console.log(counterComputer);
console.log(counterPlayer);
//create a win function to compare counters
function win(){
if(counterPlayer>counterComputer){
    return("You are the Ultimate Winner");
}else if(counterComputer>counterPlayer){
    return("Computer is the Ultimate Winner")
}else if(counterComputer=counterPlayer){
    return("There was a draw in Ultimate Tournament")
}
}
//print the above function on console
console.log(win());