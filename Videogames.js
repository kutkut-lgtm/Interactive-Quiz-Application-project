const questions = [
    {
        question: "What game won Game of the Year in 2018?",
        answers: [
            { text: "Celeste", correct: false},
            { text: "God of War 2018", correct: true},
            { text: "Red dead Redemption 2", correct: false},
            { text: "Marvel's Spider-man", correct: false},
        ]
    },
    {
       question: "What game does not belong here ?",
        answers: [
            { text: "Stellar Blade", correct: false},
            { text: "Devil may Cry 5", correct: true},
            { text: "Bloodborne", correct: false},
            { text: "Elden Ring", correct: false},
        ] 
    },
    {
        question: "What is the best selling capcom game of all time?",
        answers: [
            { text: "Monster Hunter Rise", correct: false},
            { text: "Devil may Cry 5", correct: false},
            { text: "Resident Evil 5", correct: false},
            { text: "monster hunter:World", correct: true},
        ] 
    },
    {
        question: "Which country is sony headquarter's located?",
        answers: [
            { text: "Japan", correct: false},
            { text: "France", correct: false},
            { text: "USA", correct: true},
            { text: "Austraila", correct: false},
        ] 
    },
    {
        question: "Which Playstaion's worst console released?",
        answers: [
            { text: "Playstation 4", correct: false},
            { text: "Playstation classic", correct: true},
            { text: "Playstation 3", correct: false},
            { text: "Playstation 5", correct: false},
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