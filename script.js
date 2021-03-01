const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionsBoxEL = document.getElementById("questionsBox");
const questionElement = document.getElementById("question");
const answerBtnsElement = document.getElementById("answer-btns");

var score= 0;

let shuffledQuestions, currentQuestionIndex;

const questions = [
    {
        question: "Where is Petaluma?",
        answers: [
            { text: "Spain", correct: false },
            { text: "Brazil", correct: false },
            { text: "California", correct: true },
            { text: "Texas", correct: false }
        ]
    },
    {
        question: "Where is Dublin?",
        answers: [
            { text: "Scotland", correct: false },
            { text: "Ireland", correct: true },
            { text: "Germany", correct: false },
            { text: "Austria", correct: false }
        ]
    },
    {
        question: "Where is The Bean Monument?",
        answers: [
            { text: "Austin, Texas", correct: false },
            { text: "Orlando, Florida", correct: false },
            { text: "Mars", correct: false },
            { text: "Chicago, Illinois", correct: true }
        ]
    },
    {
        question: "Where is the Sydney Opera House?",
        answers: [
            { text: "Sydney, Australia", correct: true },
            { text: "Norway", correct: false },
            { text: "Moscow, Russia", correct: false },
            { text: "London, England", correct: false}
        ]
    }
]

startButton.addEventListener("click",startGame);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if (seconds === 0) {
            alert("Game Over!")
        }
    }, 1000);
}

startButton.addEventListener("click",startGame);
startButton.addEventListener("click", function() {
    
})