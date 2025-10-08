//Quiz Questions, with the bet and the correct answer
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

// --- VARIABLES ---
let currentQuestion = 0;  // keeps track of current question index
let userAnswers = {};     // stores selected answers

// --- SELECT HTML ELEMENTS ---
const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("bet");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const quizBox = document.getElementByClass("quizCard");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("scoreText");
const reviewDiv = document.getElementById("review");
const restartBtn = document.getElementById("restartBtn");

// --- FUNCTION: SHOW QUESTION ---
function showQuestion(index) {
  const q = questions[index];
  questionText.textContent = q.question;

  // Clear old options
  betDiv.innerHTML = "";
}
