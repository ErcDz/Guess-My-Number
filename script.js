let correctNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 20;
//Changing the message...
function bgColor(answerCorrect) {
  answerCorrect
    ? (document.querySelector("body").style.backgroundColor = "green")
    : (document.querySelector("body").style.backgroundColor = "red");
}

function displayMsg(message) {
  document.querySelector("#status").textContent = message;
}

document.querySelector("#clickButton").addEventListener("click", function () {
  const userInputNum = document.querySelector("#your-guess").value;
  if (!userInputNum) {
    displayMsg("Please insert a number");
  } else if (userInputNum > correctNum) {
    displayMsg("Too high...");
    bgColor(false);
    score <= 0 ? displayMsg("FAIL") : score--;
    document.querySelector("#current-score-num").textContent = score;
  } else if (userInputNum < correctNum) {
    displayMsg("Too low...");
    bgColor(false);
    score <= 0 ? displayMsg("FAIL") : score--;
    document.querySelector("#current-score-num").textContent = score;
  } else {
    displayMsg("Correct!");
    document.querySelector("#display-answer-num").textContent = correctNum;
    bgColor(true);
  }
});

document.querySelector("#again-btn").addEventListener("click", function () {
  score = 20;
  correctNum = Math.trunc(Math.random() * 20) + 1;

  displayMsg("Please insert a number");
  document.querySelector("#current-score-num").textContent = score;
  document.querySelector("#display-answer-num").textContent = "???";
  document.querySelector("#your-guess").value = "";
  document.querySelector("body").style.backgroundColor = "white";
});
