let choices = ["rock", "paper", "scissors"];
function generateComputerChoice() {
  let index = Math.floor(Math.random() * choices.length);
  console.log("index", index);
  return choices[index];
}

function play(playerChoice) {
  let winElement = document.getElementById("win");
  let computerChoice = generateComputerChoice();
  //NOTE Both of these access our element
  document.getElementById("playerChoice").innerText = playerChoice;
  document.querySelector("#computerChoice").textContent = computerChoice;
  let result = "";

  let textColor = "green";
  if (playerChoice == computerChoice) {
    textColor = "yellow";
    result = "Its a tie!";
  } else if (playerChoice == "rock") {
    if (computerChoice == "paper") {
      result = "You lose!";
      textColor = "red";
    } else if (computerChoice == "scissors") {
      result = "You win!!";
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      result = "You Win!!";
    } else if (computerChoice == "scissors") {
      result = "You lose!!";
      textColor = "red";
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      result = "You Lose!!";
      textColor = "red";
    } else if (computerChoice == "paper") {
      result = "You Win!";
    }
  }
  winElement.innerText = result;
  document.body.style.backgroundColor = "rebeccapurple";
  winElement.style.color = textColor;
}

// Math solution

// let choices = ["Rock", "Paper", "Scissors"];
// let results = ["Win", "Lose", "Draw"];

// function play(pChoice) {
//   let cChoice = Math.floor(Math.random() * 3);
//   document.getElementById(
//     "playerChoice"
//   ).textContent = `You chose ${choices[pChoice]}\n`;
//   document.getElementById(
//     "computerChoice"
//   ).textContent = `Computer chose ${choices[cChoice]}\n`;
//   document.getElementById("win").textContent = `You ${
//     results[(2 + pChoice - cChoice) % 3]
//   }`;
// }
