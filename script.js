const rps = ["rock","paper","scissors"];
const getComputerChoice = () =>{
    let num = Math.floor(Math.random()*3);
    return rps[num];
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection===computerSelection){
        return "its a draw";
    }
    else if(playerSelection==="rock" && computerSelection==="scissors" ||
        playerSelection==="paper" && computerSelection==="rock" ||
        playerSelection==="scissors" && computerSelection==="paper"){
        return "you won" ;
    }
    else{
        return "you lost";
    }
  }
  let choice = prompt("Rock,Paper,Scissors......Shoot");
  let playerSelection = choice.toLowerCase();
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));