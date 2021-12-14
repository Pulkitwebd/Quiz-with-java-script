const quizDB = [
  {
    question: "Which variable takes precedence over other if names are same?",

    a: "global variable",

    b: "local variable",

    c: "Both of the above",

    d: " None of the above",

    ans: "ans2",
  },

  {
    question:
      "Built-in method returns  characters in a string beginning at the specified location?",

    a: "substr()",

    b: "getSubstring()",

    c: "slice()",

    d: "None of the above",

    ans: "ans1",
  },

  {
    question:
      "following function of Boolean object returns a string of either t/f depending upon the value of the object?",

    a: "toSource()",

    b: "valueOf()",

    c: "toString()",

    d: "None of the above",

    ans: "ans3",
  },

  {
    question:
      "Which of the following function of String object returns the calling string value converted to upper case while respecting the current locale?",

    a: "toLocaleUpperCase()",

    b: "toUpperCase()",

    c: "toString()",

    d: "substring()",

    ans: "ans3",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const  answers = document.querySelectorAll(".answer");
const showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;

const loadquestion = () => {
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadquestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach( (curAnsElem) => {
         if(curAnsElem.checked){
             answer = curAnsElem.id;
         }
        
    });
    return answer;
};


const deselectAll= () =>{
  answers.forEach((curAnsElem) => {
   curAnsElem.checked = false;
  })
}
submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();

  if(checkedAnswer === quizDB[questionCount].ans){
    score++;
  }
  questionCount++;
  deselectAll();


  if(questionCount < quizDB.length){
    loadquestion(); 
  }
  else{
    showScore.innerHTML= `
    <h3> You scored ${score}/ ${quizDB.length} ✌</h3>
    <button class="btn" onclick="location.reload()">Play Again</button>`;
    showScore.classList.remove('scoreArea');
  }
});


