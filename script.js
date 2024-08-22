"use strict";

const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Blue whale", correct: true },
      { text: "Shark", correct: false },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is largest country in the world?",
    answers: [
      { text: "china", correct: false },
      { text: "Canada", correct: true },
      { text: "Russia", correct: true },
      { text: "India", correct: false },
    ],
  },
  {
    question: "Which is largest continent in the world?",
    answers: [
      { text: "Africa", correct: false },
      { text: "Europe", correct: false },
      { text: "North America", correct: false },
      { text: "Asia", correct: true },
    ],
  },
  {
    question: "Which is smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Malta", correct: false },
      { text: "Nauru", correct: false },
      { text: "Bahrain", correct: false },
    ],
  },
  {
    question: "Which is smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
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
startQuiz();
