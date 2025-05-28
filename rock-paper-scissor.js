//Getting Local Storage
let score = JSON.parse(localStorage.getItem("score"));
if (score === null) {
  score = {
    Wins: 0,
    Losses: 0,
    Ties: 0,
  };
}
updatescoreonhtml();

//For Keyboard
document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playerMove("rock");
  } else if (event.key === "p") {
    playerMove("paper");
  } else if (event.key === "s") {
    playerMove("scissor");
  } else {
    alert("Make Sure to Press the Right Key");
  }
});

//PlayerMove
function playerMove(playerMove) {
  const computerMove = computerMove1();
  if (playerMove === "rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You Lose.";
    } else if (computerMove === "Scissor") {
      result = "You Win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "Rock") {
      result = "You Win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissor") {
      result = "You Lose.";
    }
  } else if (playerMove === "scissor") {
    if (computerMove === "Rock") {
      result = "You Lose.";
    } else if (computerMove === "Paper") {
      result = "You Win.";
    } else if (computerMove === "Scissor") {
      result = "Tie.";
    }
  }
  if (result === "You Win.") {
    score.Wins += 1;
  } else if (result === "You Lose.") {
    score.Losses += 1;
  } else if (result === "Tie.") {
    score.Ties += 1;
  }

  //Setting Local Storage
  localStorage.setItem("score", JSON.stringify(score));
  updatescoreonhtml();
  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(".js-move").innerHTML = ` You 
        <img class="move-img" src="images/${playerMove}-emoji.png" alt="">
        <img class="move-img" src="images/${computerMove}-emoji.png" alt="">
        Computer `;
}

//Updating Score
function updatescoreonhtml() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins : ${score.Wins} Losses : ${score.Losses} Tie : ${score.Ties}`;
}

//ComputerMove
function computerMove1() {
  const randomNumber = Math.random();
  let computerMove = "";
  let result = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissor";
  }
  return computerMove;
}
