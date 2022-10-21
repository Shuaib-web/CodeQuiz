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


}