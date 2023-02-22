var questions = [
    {
      question: "what  is the logical data type that can have only the values true or false.?",
      choices: ["boolean", "string", "number"],
      correctAnswer: 0
    },
    {
      question: "where do we code our JavaScript code?",
      choices: ["index.html", "script.js","style.css"],
      correctAnswer: 1
    },
    
    {
      question: "what type of orders do we use to increment by 1 ?",
      choices: ["array", "for loop","string"],
      correctAnswer: 1
  
    },
    {
    question: "what does prompt() related to ?",
    choices: ["html", "CSS","javaScript"],
    correctAnswer: 2
  },
  
  ];
  
  var intro = document.querySelector(".intro")
  var startQuiz = document.querySelector(".start-Quiz");
  var timeEl = document.querySelector("#iTimeShow");
  // var question = document.querySelector(".question");
  var questionContainer = document.querySelector("#question-container")
  
  var choiceList = document.querySelector(".choiseList")
  var finalEl = document.querySelector("#final")
  var initialsEl = document.querySelector("#initials");
  var mode = "start-quiz";
  // var secondsLeft = document.querySelector(#secondsLeft)
  var currentQuestion = 0
  var currentChoices = 0
  // var time = questions.length * 15;
  // var timerId;
  
  startQuiz.addEventListener("click", function () {
    intro.classList.add('hide')
    startQuiz.classList.add('hide')
  
  
    showCurrentQuestion();
    setTime();
  
  });
  
  var timeEl = document.getElementById("iTimeShow");
  
  var secondsLeft = 80;
  var timerInterval
  function setTime() {
    // Sets interval in variable
     timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds remaining.";
      console.log('timerInterval', timerInterval)
      if (secondsLeft <= 0) {
        // Stops execution of action at set interval
        console.log('timeOver')
        timeEl.textContent = 'stopTime' + " no more question.";
        clearInterval(timerInterval);
        // Calls function to create and append image
        quizEnd();
      }
  
    }, 1000);
    
  }
  
  
  function checkAnswer(index) {
    var q = questions[currentQuestion];
    var resultEl = document.querySelector("#answer-result")
    if (q.correctAnswer === index) {
      resultEl.textContent = "Correct!";
    } else {
      resultEl.textContent = "false! you just lost 15 seconds";
       secondsLeft -=15;
  
    }
  
    currentQuestion++;
  
    setTimeout(
      () => {
        if (currentQuestion < questions.length) {
          showCurrentQuestion()
        } 
        else {
          quizEnd();
         
        }
        
      }, 3000
    )
  
  }
  
  function quizEnd() {
   
    questionContainer.setAttribute('class', 'hide')
  
    final.removeAttribute('class')
  
    timeEl.textContent = 'stopTime' + " no more question.";
  
    clearInterval(timerInterval);
  //  secondsLeft = 0
  }
  
  function showCurrentQuestion() {
    var q = questions[currentQuestion];
  
    const html = `
    
         <h3 class="row questionText">${q.question}</h3>
         <button type="button" class="btn btn-primary" onclick="checkAnswer(0)">${q.choices[0]}</button>
         <button type="button" class="btn btn-primary" onclick="checkAnswer(1)">${q.choices[1]}</button>
         <button type="button" class="btn btn-primary" onclick="checkAnswer(2)">${q.choices[2]}</button>
         <p id="answer-result"></p>
  
        
    `
    questionContainer.innerHTML = html
  
  }
  
  
  function sendMessage() {
    timeEl.textContent = "Quiz is Over ";
    
  
    
  
    final.innerHTML(`<h2>final score</h2>`)
   
  }
  
  function saveHighscore() {
    // get value of input box
    var initials = initialsEl.value.trim();
  
    if (initials !== "") {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
    
    }
    var newScore = {
      score: secondsLeft,
      initials: initials
    };
    console.log(newScore)
  
    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
    // submit initials
  submitBtn.onclick = saveHighscore;
  }
  document.getElementById("submit").addEventListener("click", saveHighscore)
  
  var scoreEl = document.querySelector("#score");
  scoreEl.textContent = secondsLeft + " ";
  
  