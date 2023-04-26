const rps = ["rock","paper","scissors"];
const getComputerChoice = () =>{
    let num = Math.floor(Math.random()*3);
    return rps[num];
}

function game(){
    let compScore=0;
    let playerScore=0;
    let flag =0;
    for(let i=0;i<5;i++){
        if(compScore>=3){
            console.log("you lost");
            flag=1;
            break;
        }
        if(playerScore>=3){
            console.log("you won");
            break;
        }
        let choice = prompt("Rock,Paper,Scissors......Shoot");
        let playerSelection = choice.toLowerCase();
        let computerSelection = getComputerChoice();
        let boo = playRound(playerSelection,computerSelection);
        if(boo==1){
            playerScore++;
        }
        else if(boo==0){
            compScore++;
        }
        console.log(`you:${playerScore} and comp:${compScore}`);
    }
    if(flag===0){
        if(compScore===playerScore) console.log("its a draw");
        else if(compScore>playerScore) console.log("you lost");
        else console.log("you won");
    }
}
function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection===computerSelection){
        return 2;
    }
    else if(playerSelection==="rock" && computerSelection==="scissors" ||
        playerSelection==="paper" && computerSelection==="rock" ||
        playerSelection==="scissors" && computerSelection==="paper"){
        return 1;
    }
    else{
        return 0;
    }
  }

  game();