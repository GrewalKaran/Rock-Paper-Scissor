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
if(playerSelection == "rock"&&computerSelection.toLowerCase() =="rock"){
 //return it's a tie b/w rocks !
return("It's a tie between Rocks");}
 /*if playerSelection is equals to paper and computerSelection
 is equal to rock(lower case)*/ 
 if(playerSelection == "paper"&&computerSelection.toLowerCase() =="rock"){
 //return you won! paper beats rock
return("ou won! Paper beats Rock")
 /*if playerSelection is equals to scissor and computerSelection
 is equal to rock(lower case)*/ 

 //return you lose ! scissor loses to rock

 /*if playerSelection is equals to rock and computerSelection
 is equal to paper(lower case)*/
 
 //you lose! rock loses to paper

 /*if playerSelection is equals to rock and computerSelection
 is equal to scissors(lower case)*/ 

 //return you won! rock beats scissors

/*if playerSelection is equals to paper and computerSelection
 is equal to paper(lower case)*/ 

 //return it's a tie b/w papers!

 /*if playerSelection is equals to scissors and computerSelection
 is equal to scissors(lower case)*/ 

 //return it's a tie b/w scissors

 /*if playerSelection is equals to paper and computerSelection
 is equal to scissors(lower case)*/ 

 //return you lose! paper loses to scissors

 /*if playerSelection is equals to scissors and computerSelection
 is equal to paper(lower case)*/ 

 //return you won! scissor beats paper

 //assign the value of computerChoice function to const computerSelection parameter

 //assign the value of playerChoice to const playerSelection parameter


 /*create a function named fiveTimes having parameters - rockPaperScissor and times*/

 //if times > 0

 //return rockPaperScissor.repeat(times) to repeat the game multiple times

 //else return ""

 /*print the above function using console.log and initialize the arguments
  in the parameter of the above function*/
   




