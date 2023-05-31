(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const ISDINfree = "May 31, 2023 18:00:00";

  const countDown = new Date(ISDINfree).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      if (distance <= minute * 5) {
        document.getElementById("days").style.color = "red";
        document.getElementById("hours").style.color = "red";
        document.getElementById("minutes").style.color = "red";
        document.getElementById("seconds").style.color = "red";
      }
      if (distance < 0) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
    }, 0);
})();

// Instruction #1
let showInstructionOne = document.getElementById("showInstructionOne");
let instructionOne = document.getElementById("instructionOne");

showInstructionOne.addEventListener("click", function () {
  instructionOne.style.display = "block";
  showInstructionOne.style.display = "none";
});

// Instruction #2
let showInstructionTwo = document.getElementById("showInstructionTwo");
let instructionTwo = document.getElementById("instructionTwo");

showInstructionTwo.addEventListener("click", function () {
  instructionTwo.style.display = "block";
  showInstructionTwo.style.display = "none";
});

// Hint #1
let showHintOne = document.getElementById("showHintOne");
let hintOne = document.getElementById("hintOne");

showHintOne.addEventListener("click", function () {
  hintOne.style.display = "block";
  showHintOne.style.display = "none";
});

// Hint #2
let showHintTwo = document.getElementById("showHintTwo");
let hintTwo = document.getElementById("hintTwo");

showHintTwo.addEventListener("click", function () {
  hintTwo.style.display = "block";
  showHintTwo.style.display = "none";
});

// Hint #3
let showHintThree = document.getElementById("showHintThree");
let hintThree = document.getElementById("hintThree");

showHintThree.addEventListener("click", function () {
  hintThree.style.display = "block";
  showHintThree.style.display = "none";
});

// Hint #4
let showHintFour = document.getElementById("showHintFour");
let hintFour = document.getElementById("hintFour");

showHintFour.addEventListener("click", function () {
  hintFour.style.display = "block";
  showHintFour.style.display = "none";
});

// Hint #5
let showHintFive = document.getElementById("showHintFive");
let hintFive = document.getElementById("hintFive");

showHintFive.addEventListener("click", function () {
  hintFive.style.display = "block";
  showHintFive.style.display = "none";
});
