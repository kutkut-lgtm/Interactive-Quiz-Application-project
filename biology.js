const questions = [
    {
        question: "What is the process by which plants make their own food?",
        answers: [
            {text: "Photosynthesis", correct: true},
            {text: "Oxidation", correct: false},
            {text: "Respiration", correct: false},
            {text: "Chlorophyll", correct: false},
        ]
    },
    {
        question: "What is the basic unit of all living things?",
        answers: [
            {text: "Molecule", correct: false},
            {text: "Cell", correct: true},
            {text: "Organelle", correct: false},
            {text: "Atom", correct: false},
        ]
    },
    {
        question: "Name the jelly-like substance that fills a plant cell ans surrounds the organelles.",
        answers: [
            {text: "Nucleus", correct: false},
            {text: "Cell wall", correct: false},
            {text: "Cytoplasm", correct: true},
            {text: "Mitochondria", correct: false},
        ]
    },
    {
        question: "What is the thoery that states that all life has descended from a common ancestor?",
        answers: [
            {text: "Mutation", correct: false},
            {text: "Reproduction", correct: false},
            {text: "Genetics", correct: false},
            {text: "Evolution", correct: true},
        ]
    },
    {
        question: "What is the normal human body temperature?",
        answers: [
            {text: "100", correct: false},
            {text: "25", correct: false},
            {text: "37", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        question: "Which organ is responsible for filtering blood and producing urine?",
        answers: [
            {text: "Kidney", correct: true},
            {text: "Liver", correct: false},
            {text: "Heart", correct: false},
            {text: "Pancreas", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0 
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo = ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    } 

    );
}