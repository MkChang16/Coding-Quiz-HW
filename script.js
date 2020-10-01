const startBtn = document.getElementById ('start-btn')
const submitBtn = document.getElementById ('submit-btn')
const quizContainer = document.getElementById ('quiz-container')
const displayQuestions = document.getElementById ('questions')
const choiceAlpha = document.getElementById ('label0')
const choiceBravo = document.getElementById ('label1')
const choiceCharlie = document.getElementById ('label2')
const choiceDelta = document.getElementById ('label3')

var timeEl = document.querySelector(".time");

var secondsLeft = 300;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

startBtn.addEventListener('click', start);
submitBtn.addEventListener('click', submit);

function start (){
console.log(start)
startBtn.classList.add('hide');
quizContainer.classList.remove('hide')
submitBtn.classList.remove('hide')
createQuestion(currentNumber);
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
    currentNumber++
    createQuestion(currentNumber)
    const rbs = document.querySelectorAll('input[name="choice"]')
    let selectedValue;
        for (const rb of rbs) {
            if (rb.checked) {
                selectedValue = rb.value;
                break;
            }
        }
}

var allQuestions = 
    [
        {question: "Q1: What is your name?",
                    choices: ["Steve", "kevin", "peter", "jimmy"],
                    correctAnswer:0},
        
        {question: "Q2: What is the capital of United States?",
                    choices: ["California", "New York", "Miami", "Florida"],
                    correctAnswer:0},

        {question: "Q3: How many years can a snail sleep without eating?",
                    choices: ["California", "New York", "Miami", "Florida"],
                    correctAnswer:0}
    ]


setTime();

// function showScore(){
//     document.forms.radioAnswers.style.display="none";
//     var question=document.getElementById("question");
//     question.style.display = "none";
//     var elt=document.getElementById("point");
//     elt.style.display = "block"; 
//     var button = document.getElementById("next");
//     button.style.display="none";   

// }



// var container = document.getElementById('container');
//       for (var i = 0; i < questions.length; i++) {
//           var questionContainer = document.createElement('DIV');
//           questionContainer.textContent = questions[i].question;

//           var options = questions[i].choices;
//           for (var opt in options) {
//               //create radiobutton
//               //append radiobutton to a div 
//           }
//           container.appendChild(questionContainer);
//       }
        
        







// Prior Code Reference 

// const quizContainer = document.getElementById ('quiz')
// const startQuizButton = document.getElementById ('start-btn')
// const questionChoicesContainer = document.getElementById ('answerChoices')
// const submitAnswerButton = document.getElementById ('submitAnswer')
// const questionElement = document.getElementById ('quizQuestions')
// const answerElement = document.getElementById ('answerChoices')
// const answerButtonsElement = document.getElementById ('answer-btn')


// let shuffledQuestions, currentQuestionIndex

// startQuizButton.addEventListener('click', beginGame)

// function beginGame(){
//     startQuizButton.classList.add('hideTransition');
//     shuffledQuestions = questions.sort(() => math.random() - .5)
//     currentQuestionIndex = 0
//     quizContainer.classList.remove('hideTransition');
//     submitAnswerButton.classList.remove('hideTransition');
//     submitAnswer();
// }

// function submitAnswer(){
//     resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex]);
// }

// function showQuestion(question){
//     questionElement.innerText = question.question;
//     question.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('answer-btn')
//         if (answer.correct) {
//           button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswer)
//         answerButtonsElement.appendChild(button)
//       })
// }

// function resetState() {
//     clearStatusClass(document.body);
//     nextButton.classList.add('hide');
//     while (answerButtonsElement.firstChild){
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//         }
// }

// function selectAnswer(e) {
//     const selectedButton = e.target
//     const correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
//       setStatusClass(button, button.dataset.correct)
//     })
// }
  
//   function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//       element.classList.add('correct')
//     } else {
//       element.classList.add('wrong')
//     }
// }
  
//   function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }

// const questions = [
//     {
//       question: 'What is the strongest muscle in proportion to its size in the human body?',
//       answer1: 'Tongue',
//       answer2: 'Hamstrings',
//     },
// ]
//     {    
//       question: "How many years can a snail sleep without eating?",
//       answers: {
//         a: "1",
//         b: "2",
//         c: "3",
//         d: "4",
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Finish the proverb 'great minds think alike __.' Hint* Base off British English",
//       answers: {
//         a: ",wisdom comes in twos",
//         b: "and greater actions unify",
//         c: ",fools seldom differ",
//         d: ",but success is only for one"
//       },
//       correctAnswer: "c"
//     }
//   ]
