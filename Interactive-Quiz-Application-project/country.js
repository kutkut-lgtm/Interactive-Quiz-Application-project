const questions = [
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false},
            { text: "Tokyo", correct: true},
            { text: "Seoul", correct: false},
            { text: "Bangkok", correct: false},
        ]
    },
    {
       question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false},
            { text: "Japan", correct: true},
            { text: "India", correct: false},
            { text: "Thailand", correct: false},
        ] 
    },
    {
        question: "Which country has the largest population?",
        answers: [
            { text: "India", correct: false},
            { text: "USA", correct: false},
            { text: "China", correct: false},
            { text: "Russia", correct: true},
        ] 
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        answers: [
            { text: "Italy", correct: false},
            { text: "Germany", correct: false},
            { text: "France", correct: true},
            { text: "Spain", correct: false},
        ] 
    },
    {
        question: "Which country has Sydney as a major city?",
        answers: [
            { text: "Canada", correct: false},
            { text: "Australia", correct: true},
            { text: "South Africa", correct: false},
            { text: "New Zealand", correct: false},
        ] 
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        };
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if (isCorrect) {
        selectedbtn.classList.add("correct");
        score++;
    } else {
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
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
        startquiz();
    }
});

startquiz();