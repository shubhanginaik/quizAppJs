"use strict";

const questions = [
  {
    question:
      "Which of the following is a correct way to define a function in JavaScript?",
    answers: [
      { text: "function myFunction() {}", correct: true },
      { text: "def myFunction() {}", correct: false },
      { text: "function:myFunction() {}", correct: false },
      { text: "func myFunction() {}", correct: false },
    ],
  },
  {
    question: "What does JSON.stringify() do in JavaScript?",
    answers: [
      { text: "Converts a JSON string into an object", correct: false },
      {
        text: "Converts a JavaScript object into a JSON string",
        correct: true,
      },
      {
        text: "Converts a JavaScript object into a plain text string",
        correct: false,
      },
      { text: "Converts a JSON string into an array", correct: false },
    ],
  },
  {
    question:
      "Which method is used to add one or more elements to the end of an array in JavaScript?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question:
      "What will be the output of the following code? \n console.log(0.1 + 0.2 === 0.3);",
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true },
      { text: "indefined", correct: false },
      { text: "NaN", correct: false },
    ],
  },
  {
    question: "What is the purpose of the isNaN function in JavaScript?",
    answers: [
      { text: "To check if a value is a string", correct: false },
      { text: "To check if a value is null", correct: false },
      { text: "To check if a value is undefined", correct: false },
      { text: "To check if a value is NaN (Not-a-Number)", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("inCorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
