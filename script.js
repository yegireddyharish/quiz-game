// Data for the quiz questions
const quizData = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Venus",
        correct: "b",
    },
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c",
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d",
    },
    {
        question: "What is the boiling point of water?",
        a: "90°C",
        b: "100°C",
        c: "110°C",
        d: "120°C",
        correct: "b",
    },
];

// Get all the DOM elements we need to interact with
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

// Load the first quiz question
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Display the final score
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
