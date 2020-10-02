const startBtn = document.getElementById ('start-btn')
const submitBtn = document.getElementById ('submit-btn')
const quizContainer = document.getElementById ('quiz-container')
const displayQuestions = document.getElementById ('questions')
const choiceAlpha = document.getElementById ('label0')
const choiceBravo = document.getElementById ('label1')
const choiceCharlie = document.getElementById ('label2')
const choiceDelta = document.getElementById ('label3')
const yourScore = document.getElementById ('yourScore')
const rules = document.getElementById ('rules')

var timeEl = document.querySelector(".time");

var secondsLeft = 300;
var timerInterval 

function setTime() {
timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

startBtn.addEventListener('click', start);
submitBtn.addEventListener('click', submit);

function start (){
console.log(start)
startBtn.classList.add('hide');
rules.classList.add('hide');
quizContainer.classList.remove('hide')
submitBtn.classList.remove('hide')
createQuestion(currentNumber);
setTime()
}

var score = 0;
var currentNumber = 0; 

function createQuestion (a){
    displayQuestions.innerText = allQuestions[a].question
    choiceAlpha.innerText = allQuestions[a].choices[0]
    choiceBravo.innerText = allQuestions[a].choices[1]
    choiceCharlie.innerText = allQuestions[a].choices[2]
    choiceDelta.innerText = allQuestions[a].choices [3]
}

function submit(){
    const rbs = document.querySelectorAll('input[name="choice"]')
    let selectedValue;
        for (const rb of rbs) {
            if (rb.checked) {
                selectedValue = rb.value;
                selectedValue = parseInt(selectedValue);
                console.log(selectedValue)
                break;
            }
        }
    checkAnswer(selectedValue, currentNumber);
    if (allQuestions.length-1 === currentNumber){
        showResults()
    }
    else {
    currentNumber++
    createQuestion(currentNumber)}
}

function checkAnswer(selectedValue, questionNumber){
    console.log(checkAnswer)
    if (allQuestions[questionNumber].correctAnswer === selectedValue){
    }
    else {
        console.log('wrong')
        secondsLeft = secondsLeft - 50
    }
}

function showResults(){
    quizContainer.classList.add('hide')
    submitBtn.classList.add('hide')
    yourScore.classList.remove('hide')
    clearInterval(timerInterval)
}

var allQuestions = 
    [
        {question: "Q1: What is another alternate name for the hashtag/pound key?",
                    choices: ["Octothrope", "Pentathrope", "Hexathrope", "None of the above"],
                    correctAnswer:0},
        
        {question: "Q2: What are baby porcupines called?",
                    choices: ["Porcupines", "Porcies", "Porcupettes", "Cupines"],
                    correctAnswer:2},

        {question: "Q3: How many years can a snail sleep without eating?",
                    choices: ["1", "2", "3", "4"],
                    correctAnswer:2},
        
        {question: "Q4: What was the orignal use of bubble wrap?",
                    choices: ["Vehicle Crash Safety", "3D Wallpaper", "Packaging", "Bed comforters"],
                    correctAnswer:1},

        {question: "Q5: On average, how many hot dogs do Americans consume on the 4th of July?",
                    choices: ["500 million", "50 million", "100 million", "150 million"],
                    correctAnswer:3},
    ]
