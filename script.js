// Creating quiz CLASS

class Quiz {

constructor(questions){

    this.score = 0;
    this.questions= questions;
    this.questionsIndex= 0;
}

getQuestionIndex(){
    return this.questions[this.questionsIndex];
}

guess (answer) {
if (this.getQuestionIndex() .isCorrectAnswer(answer)) {
    this.score++;

}
this.questionsIndex ++;

}

isEnded (){
    return this.questionsIndex ===  this.questions.length;
}

}

// Creating a question class

class Question {
    constructor(text, choices, answer){
        this.text= text;
        this.choices= choices;
        this.answer= answer;
    }
    isCorrectAnswer(choice){
        return this.answer === choice 
    }
}


// Display question 

function displayQuestion () {
    if (quiz.isEnded()){
        showScores();
    } else {
        //show questions
        
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;
        // show choices
        
        let choices = quiz.getQuestionIndex().choices;
        for ( let i = 0; i < choices.length; i++ ){
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    showProgress();
    }
};

// Guess function

function guess (id, guess){
    let button = document.getElementById(id);
    button.onclick = function (){
        quiz.guess(guess);
        displayQuestion();
    }
}

//Quiz progress 

function showProgress() {
    let currentQuestionNumber = quiz.questionsIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML =
    `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
    
}


//Show score 

function showScores() {
    let quizEndHTML = 
    `
    <h1>Quiz completed</h1>
    <h2 id="score">You scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class ="quiz-repeat">
    <a href="index.html">Repeat Quiz</a>
    </div>
    
    `;
    
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}

// Quiz questions

let questions =[

    new Question("How can you print information to the console",["console.log(info)", "console", "console.log", "print(info)"] , "console.log(info)"
    ),
    new Question (
        "What keyword is used to create a JavaScript", ["varies", "variable", "string", "var"], "var"
    ),
    new Question (
        "The # symbol specifies that the selector is?", ["class", "id", "tag", "first"], "id"
    ),
    new Question (
        "What is jQuery?", ["A framework", "A library", "jQuery?", "none of these"], "A library"
    ),
    new Question (
        "What is not an HTML5 element?" , ["blink", "section", "header", "footer"], "blink"
    )
];

let quiz = new Quiz(questions);

// display question
displayQuestion();

// Adding a countdown

let time = 5;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown () {
    let quizTimer = setInterval(function() {
        if (quizTimer <= 0){
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;   
        }
    },1000);
    }
