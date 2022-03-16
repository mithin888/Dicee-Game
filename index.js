// initialize elements
const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const p1DiceImg = document.querySelector(".img1");
const p2DiceImg = document.querySelector(".img2");

// function for random numbers
function randomNumberFunc() {
  // initialize random numbers for both dice
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // return array with 2 random numbers
  return [randomNumber1, randomNumber2];
}

// function for rolling dice
function rollDice() {
  button.addEventListener("click", (e) => {
    let randomNumbers = randomNumberFunc();
    let randomNumber1 = randomNumbers[0];
    let randomNumber2 = randomNumbers[1];
    for (i = 1; i <= 6; i++) {
      p1DiceImg.setAttribute("src", `images/dice${i}.png`);
      p2DiceImg.setAttribute("src", `images/dice${i}.png`);
    }
    p1DiceImg.setAttribute("src", `images/dice${randomNumber1}.png`);
    p2DiceImg.setAttribute("src", `images/dice${randomNumber2}.png`);

    if (randomNumber1 == randomNumber2) {
      h1.textContent = "Draw!";
    }
    if (randomNumber1 > randomNumber2) {
      h1.textContent = "Player 1 Wins!";
    }
    if (randomNumber2 > randomNumber1) {
      h1.textContent = "Player 2 Wins!";
    }
  });
}

rollDice();
