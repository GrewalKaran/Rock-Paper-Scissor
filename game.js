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
 is equal to rock(lower case)*/
if(playerSelection == "rock"&&computerSelection =="rock"){
 //return it's a tie b/w rocks !
return("It's a tie between Rocks");}
 /*if playerSelection is equals to paper and computerSelection
 is equal to rock(lower case)*/ 
 if(playerSelection == "paper"&&computerSelection =="rock"){
 //return you won! paper beats rock
return("You won! Paper beats Rock");}
 /*if playerSelection is equals to scissor and computerSelection
 is equal to rock(lower case)*/ 
 if(playerSelection == "scissor"&&computerSelection =="rock"){
 //return you lose ! scissor loses to rock
return("You lose! Scissor loses to Rock");}
 /*if playerSelection is equals to rock and computerSelection
 is equal to paper(lower case)*/
 if(playerSelection == "rock"&&computerSelection =="paper"){
 //return you lose! rock loses to paper
return("You lose! Rock loses to Paper");}
 /*if playerSelection is equals to rock and computerSelection
 is equal to scissor(lower case)*/ 
 if(playerSelection == "rock"&&computerSelection =="scissor"){
 //return you won! rock beats scissors
return("You won! Rock beats Scissor");}
/*if playerSelection is equals to paper and computerSelection
 is equal to paper(lower case)*/ 
 if(playerSelection == "paper"&&computerSelection =="paper"){
 //return it's a tie b/w papers!
return("It's a tie between Papers");}
 /*if playerSelection is equals to scissors and computerSelection
 is equal to scissors(lower case)*/ 
 if(playerSelection == "scissor"&&computerSelection == "scissor"){
 //return it's a tie b/w scissors
return("It's a tie between scissors");}
 /*if playerSelection is equals to paper and computerSelection
 is equal to scissor(lower case)*/ 
 if(playerSelection == "paper"&&computerSelection =="scissor"){
 //return you lose! paper loses to scissor
return("You lose! Paper loses to scissor");}
 /*if playerSelection is equals to scissors and computerSelection
 is equal to paper(lower case)*/ 
 if(playerSelection == "scissor"&&computerSelection =="paper"){
 //return you won! scissor beats paper
return("You won! Scissor beats Paper");}
 }
 //assign the value of playerChoice 
let playerChoice  = prompt("Please select - Rock , Paper or Scissor");

 /*print the above function using console.log and initialize the arguments
  in the parameter of the above function*/
console.log(gameRound(playerChoice,computerChoice()));
console.log(gameRound(playerChoice,computerChoice()));
console.log(gameRound(playerChoice,computerChoice()));
console.log(gameRound(playerChoice,computerChoice()));
console.log(gameRound(playerChoice,computerChoice()));
