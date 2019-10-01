let choices = ["rock", "paper", "scissors"];
function generateComputerChoice() {
  let index = Math.floor(Math.random() * choices.length);
  console.log("index", index);
  return choices[index];
}

function play(playerChoice) {
  let computerChoice = generateComputerChoice();
  //NOTE Both of these access our element
  document.getElementById("playerChoice").innerText = playerChoice;
  document.querySelector("#computerChoice").textContent = computerChoice;

  if (playerChoice == "rock") {
    if (computerChoice == "rock") {
      console.log("It is a tie!");
    } else if (computerChoice == "paper") {
      console.log("You lose!");
    } else if (computerChoice == "scissors") {
      console.log("You win!!");
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      console.log("You Win!!");
    } else if (computerChoice == "paper") {
      console.log("It's a tie!");
    } else if (computerChoice == "scissors") {
      console.log("You lose!!");
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      console.log("You Lose!!");
    } else if (computerChoice == "paper") {
      console.log("You Win!");
    } else if (computerChoice == "scissors") {
      console.log("It's a tie");
    }
  }
}
