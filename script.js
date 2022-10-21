// Creating quiz CLASS

class quiz {

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
        Quiz.guess(guess);
        displayQuestion();
    }
}

//Quiz progress 

function showProgress (){
    let currentQuestionNumber = quiz.questionsIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML =
    `Question ${currentQuestionNumber} of${quiz.question.length}`;
}

//Show score 

function showScores() {
    let quizEndHTML = 
    `
    <h1>Quiz completed</h1>
    <h2 id="score">You scored: ${quiz.score} of ${quiz.question.length}</h2>
    <div class ="quiz-repeat">
    <a href="index.html">Repeat Quiz</a>
    </div>
    `;
    
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}