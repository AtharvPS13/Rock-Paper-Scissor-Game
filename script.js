let humanscore = 0;
let computerscore = 0;

function getHumanChoice(callback) {
  document.querySelector(".rock").addEventListener("click", () => callback("rock"));
  document.querySelector(".paper").addEventListener("click", () => callback("paper"));
  document.querySelector(".scissor").addEventListener("click", () => callback("scissor"));
}

function getcomputerchoice() {
  const x = Math.floor(Math.random() * 100);
  if (x <= 33) return "rock";
  else if (x <= 66) return "paper";
  else return "scissor";
}

function playRound(humanselection, computerselection) {
  if (humanselection === computerselection) {
    console.log("It's a Tie!");
  } else if (
    (humanselection === "rock" && computerselection === "scissor") ||
    (humanselection === "paper" && computerselection === "rock") ||
    (humanselection === "scissor" && computerselection === "paper")
  ) {
    console.log(`You Won! ${humanselection} beats ${computerselection}`);
    humanscore++;
  } else {
    console.log(`You Lost! ${computerselection} beats ${humanselection}`);
    computerscore++;
  }

  console.log(`Score: You ${humanscore} - ${computerscore} Computer`);

  if (humanscore === 5 || computerscore === 5) {
    console.log("Game Over");
    if (humanscore > computerscore) {
      console.log("You won the game!!");
    } else {
      console.log("You lost the game!!");
    }
  }
}

getHumanChoice((humanselection) => {
  if (humanscore < 5 && computerscore < 5) {
    const computerselection = getcomputerchoice();
    playRound(humanselection, computerselection);
  }
});