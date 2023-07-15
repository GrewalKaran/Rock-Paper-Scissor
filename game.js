//get computer's choice for rock paper and scissors
//get a random number from the computer ranging from 1 to 3
//assign rock paper and scissors to above random numbers
function getComputerChoice(){
    let random = Math.floor(Math.random()*3)+ 1;
    if(random == 1){          /*dont use = because it will assign the value to random variable, 
                               instead == will compare the random variable */  
        console.log("rock");
    }else if(random == 2){
        console.log("paper");
    }else if(random == 3){
        console.log("scissors");
    }
}getComputerChoice();
//get user's choice 
function getUserChoice(){

}
//Compare both choices and display who wins
function roundResult(){

}
//repeat the above process 5 times 
function game(){

}
//display the final result