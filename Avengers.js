// Questions array, with the possible answers and the actual answer
const questions = [
  {
    question: "Who said the line 'I am inevitable'?",
    bet: ["Thanos", "Loki", "Ultron", "Red Skull"],
    answer: "Thanos"
  },
  {
    question: "What planet was Thanos born on?",
    bet: ["Titan", "Asgard", "Xandar", "Sakaar"],
    answer: "Titan"
  },
  {
    question: "What metal is Captain America's shield made from?",
    bet: ["Vibranium", "Adamantium", "Titanium", "Uru"],
    answer: "Vibranium"
  },
  {
    question: "Who almost lifted Thor’s hammer before Endgame?",
    bet: ["Vision", "Captain America", "Iron Man", "Both Vision and Cap"],
    answer: "Both Vision and Cap"
  }
];

// VARIABLES
let currentQuestion = 0;
let userAnswers = {};

const questionText = document.getElementById("question-text");
const betDiv = document.getElementById("bet");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("back-btn");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("scoreText");
const reviewDiv = document.getElementById("review");
const quizCard = document.getElementById("quizCard");
const restartBtn = document.getElementById("restartBtn");

// DISPLAY FIRST QUESTION 
showQuestion(currentQuestion);

// Function for displaying the question 
function showQuestion(index) {
  const q = questions[index];
  questionText.textContent = q.question;
  betDiv.innerHTML = "";

  // Create answer options
  q.bet.forEach(option => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="q${index}" value="${option}">
      <span>${option}</span>
    `;
    label.querySelector("input").addEventListener("click", () => {
      userAnswers[index] = option;
    });
    // Keep selected answer checked
    if (userAnswers[index] === option) {
      label.querySelector("input").checked = true;
    }
    betDiv.appendChild(label);
  });

  // Button visibility
  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === questions.length - 1 ? "Finish" : "Next";
}

// === FUNCTION: SHOW RESULTS ===
function showResults() {
  let score = 0;
  resultBox.style.display = "block";
  quizCard.style.display = "none";

  reviewDiv.innerHTML = "";

  questions.forEach((q, i) => {
    const userAns = userAnswers[i];
    const correct = userAns === q.answer;
    if (correct) score++;

    const p = document.createElement("p");
    p.innerHTML = `
      <strong>Q${i + 1}:</strong> ${q.question}<br>
      Your answer: <span class="${correct ? 'correct' : 'wrong'}">${userAns || "No answer"}</span><br>
      Correct answer: <span class="correct">${q.answer}</span>
    `;
    reviewDiv.appendChild(p);
  });

  const percent = Math.round((score / questions.length) * 100);
  scoreText.textContent = `You got ${score}/${questions.length} correct (${percent}%)`;
}


// BUTTON: NEXT
nextBtn.addEventListener("click", () => {
  // If last question → show result
  if (currentQuestion === questions.length - 1) {
    showResults();
  } else {
    currentQuestion++;
    slideCard("next");
    showQuestion(currentQuestion);
  }
});

// BUTTON: BACK
prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    slideCard("back");
    showQuestion(currentQuestion);
  }
});

// SMALL SLIDE ANIMATION FUNCTION 
function slideCard(direction) {
  quizCard.style.transform = direction === "next" ? "translateX(50px)" : "translateX(-50px)";
  setTimeout(() => (quizCard.style.transform = "translateX(0)"), 200);
}

//BUTTON: RESTART
restartBtn.addEventListener("click", () => {
  resultBox.style.display = "none";
  quizCard.style.display = "block";
  currentQuestion = 0;
  userAnswers = {};
  showQuestion(currentQuestion);
});


