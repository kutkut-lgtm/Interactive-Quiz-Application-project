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
        amswers: [
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
const answerButtons = document.getElementById("answer-buttons");
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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    } 

    );
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedbtn = e.target;
    const  isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }


Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
 });
 nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Let's go again!";
    nextButton.style.display = "block"; 
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();