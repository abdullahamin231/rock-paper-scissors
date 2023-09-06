function getComputerChoice(){
choices = ["rock", "paper", "scissors"];
i = Math.floor(Math.random()*3);
return choices[i];
}
function playerChoice(){
    playerSelection = (prompt("Enter your choice:")).toLowerCase();
    console.log(playerSelection.toString()) ;
    
}

function playRound(playerSelection, computerSelection){
    var player = 0; var comp = 0;
    if(playerSelection == computerSelection){
        return "Its a draw!";
    } else if(  (playerSelection == "rock" && computerSelection=="paper") || 
                (playerSelection == "paper" && computerSelection=="scissors") || (
                 playerSelection == "scissors" && computerSelection=="paper")){
                    player += 1;
        return "You Won! "+playerSelection+" beats "+computerSelection;
    } else if((computerSelection == "rock" && playerSelection=="paper") || 
    (computerSelection == "paper" && playerSelection=="scissors") || (
     computerSelection == "scissors" && playerSelection=="paper")
    ){
        comp += 1;
        return "You Lose! "+computerSelection+" beats "+playerSelection;
    } 
}



// console.log(playRound(playerSelection, computerSelection));
function game(){
        computerSelection = getComputerChoice();
        playerSelection = playerChoice();
        playRound(playerSelection, computerSelection);
}