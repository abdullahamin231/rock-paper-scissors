var player = 0; var comp= 0;
const buttons = document.querySelectorAll("button");


function getComputerChoice(){
  choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
      let computerSelection = getComputerChoice();
	  let result = "";
      if (playerSelection === computerSelection) {
        result = "It's a draw!";
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        player+=1;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + player + "<br>Computer score: " + comp)
      } else {
        comp+=1;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
      }
	  document.getElementById('result').innerHTML = result
    return

}


buttons.forEach(button => {
	button.addEventListener('click', function() { playRound(button.value)})
})
  