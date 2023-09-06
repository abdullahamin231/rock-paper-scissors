function getComputerChoice(){
  choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
  }
  
  function playerChoice(){ 
      return prompt("Enter your choice: ");
  }
  var player = 0; var comp= 0;
  function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "It's a draw!";
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        player++
        return "You win! " + playerSelection + " beats " + computerSelection;
      } else {
        comp++
        return "You lose! " + computerSelection + " beats " + playerSelection;
      }
    }
  
  function run(){
      comp = getComputerChoice();
      player = playerChoice()
      return playRound(player, comp);
  
  }
