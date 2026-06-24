//Global Variables
//Define the variables you will be using in your project.
var questionCount = 0;
var SanguineScore = 0;
var CholericScore = 0;
var MelancholicScore = 0;
var PhlegmaticScore = 0;

//#TODO: Use the DOM to create variables for the quiz questions.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1"); // Extension 1 - Lengthen Quiz
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var result = document.getElementById("result");
var updateRetake = document.getElementById("updateRetake");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", Melancholic);
q1a2.addEventListener("click", Choleric);
q1a3.addEventListener("click", Sanguine);
q1a4.addEventListener("click", Phlegmatic);

q2a1.addEventListener("click", Sanguine);
q2a2.addEventListener("click", Melancholic);
q2a3.addEventListener("click", Phlegmatic);
q2a4.addEventListener("click", Choleric);

q3a1.addEventListener("click", Melancholic);
q3a2.addEventListener("click", Phlegmatic);
q3a3.addEventListener("click", Sanguine);
q3a4.addEventListener("click", Choleric);

q4a1.addEventListener("click", Choleric);
q4a2.addEventListener("click", Sanguine);
q4a3.addEventListener("click", Melancholic);
q4a4.addEventListener("click", Phlegmatic);

updateRetake.addEventListener("click", Reload);

//#TODO: Define quiz functions here
function Sanguine() {
  SanguineScore += 1;
  questionCount += 1;
  //alert("Sang");
  if (questionCount >= 4) {
    updateResult();
  }
}

function Choleric() {
  CholericScore += 1;
  questionCount += 1;
  //alert("Choleric");
  if (questionCount >= 4) {
    updateResult();
  }
}

function Melancholic() {
  MelancholicScore += 1;
  questionCount += 1;
  //alert("Melan");
  if (questionCount >= 4) {
    updateResult();
  }
}
function Phlegmatic() {
  PhlegmaticScore += 1;
  questionCount += 1;
  //alert("Phel");
  if (questionCount >= 4) {
    updateResult();
  }
}
//# Calculate results:
function updateResult() {
  var res = "Your result is:";
  if (
    SanguineScore >= 2 ||
    CholericScore >= 2 ||
    MelancholicScore >= 2 ||
    PhlegmaticScore >= 2
  ) {
    if (SanguineScore >= 2) {
      res = res + " Sanguine";
    }
    if (CholericScore >= 2) {
      res = res + " Choleric";
    }
    if (MelancholicScore >= 2) {
      res = res + " Melancholic";
    }
    if (PhlegmaticScore >= 2) {
      res = res + " Phlegmatic";
    }
  } else {
    res =
      "While the four temperament theory suggests there are merely four personality types, it is important to understand that in reality, an individual can have many personality types! You may be someone who fits into multiple molds and that is wonderful! You may try again with different answers however.";
  }
  result.innerHTML = res;
}

// Extension 2 - Restart the Quiz
function Reload() {
  //alert("hri");
  result.innerHTML = "Your result is...";
  SanguineScore = 0;
  CholericScore = 0;
  MelancholicScore = 0;
  PhlegmaticScore = 0;
  questionCount = 0;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  enableQuestions(); //Part of Extension 3
}

// Extension 3 - Disable Buttons
function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
}