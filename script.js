//arrray of the quiz questions, avaialble choices, and correct answers     
var questions = [{
    title: "What is Pam Beesly's middle name?",
    choices: ["Stacy( )", "Elizabeth( )", "Morgan( )", "Heliene( )"],
    answer: "Morgan( )"
},
{
    title: "Who spills the beans?",
    choices: ["Stanley( )", "Kelly( )", "Michael( )", "Kevin( )"],
    answer: "Kevin( )"
},
{
    title: "Who is the main character in Toby's fiction novel?",
    choices: ["Chad Flenderman( )", "Nelly Bertrum( )", "Elliot Bryce Williams( )", "None of the above."],
    answer: "Chad Flenderman( )"
},
{
    title: "What does Nelly want to buy Pam?",
    choices: ["A teapot( )", "A gold arabian slipper( )", "A water color set( )", "A cast iron( )"],
    answer: "A gold arabian slipper( )"
},
{
    title: "What is Anglela's favorite song?",
    choices: ["Little Drummer Boy( )", "Nutcracker( )", "Smelly Cat( )", "Be Thy God( )"],
    answer: "Little Drummer Boy( )"
},
{
    title: "Who in the office is allergic to walnuts?",
    choices: ["Darryl( )", "Kevin( )", "Oscar( )", "Meredith( )"],
    answer: "Kevin( )"
},
{
    title: "Where did Michael go to spend the surplus check?",
    choices: ["Nashua Dunder Mifflin( )", "Hooters( )", "Sandals Jamaica( )", "Burlington Coat Factory( )"],
    answer: "Burlington Coat Factory( )"
},
{
    title: "What is Erin's real name?",
    choices: ["Mary Ann( )", "Kelley( )", "Susan( )", "Rajniganda( )"],
    answer: "Kelley( )"
},
{
    title: "Who was the killer in Michael's 'There's been a murder' game?",
    choices: ["Phyllis( )", "Angela( )", "Creed( )", "Jim( )"],
    answer: "Phyllis( )"
},
{
    title: "Where does Dwight stash the chandelier?",
    choices: ["Mexico( )", "Cananda( )", "Berlin( )", "Paris( )"],
    answer: "Berlin( )"
}
]

//setting the numerical variables for the functions.. scores and timers.. 
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;


//starts the countdown timer once user clicks the 'start' button
function start() {

    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
    next();
}

//stop the timer to end the game 
function endGame() {
    clearInterval(timer);
    // storeHighscores();

    var quizContent = `
    <div class="container" id="start">
        <div class="row justify-content-center">
            <div class="col-10 col-lg-8 text-center">
                <h2>Game over!</h2>
                <h3>You got a ` + score + ` /100!</h3>
                <h3>That means you got ` + score / 10 + ` questions correct!</h3>
                <input type="text" id="name" placeholder="Initials"> 
                <button onclick="storeHighscores()">Set score!</button>
            </div>
        </div>
    </div>  
`;

    document.getElementById("quizBody").innerHTML = quizContent;
}


// Render scores from local storage
function renderLastScore() {
    localStorage.getItem("highscore", score);
    var highscoreName = localStorage.getItem("highscoreName", document.getElementById("name").value);
    if (!highscoreName) {
        return;
    }
}
function storeHighscores() {
    // Stringify and set "highscores" key in localStorage to higscores array
    var highscores = JSON.parse(localStorage.getItem("highscores"));
    /// add the next high score
    if (!highscores) {
        highscores = [];
    }
    highscores.push({ initials: document.getElementById("name").value, score: score })
    localStorage.setItem("highscores", JSON.stringify(highscores));
}


//Display rendered scores in Highscore Display
function getScore() {
    var quizContent = `
    <div class="container" id="start">
        <div class="row justify-content-center">
            <div class="col-10 col-lg-8 text-center">
                <h2>` + localStorage.getItem("highscoreName") + ` Highscore:</h2>
                <h1>` + localStorage.getItem("highscore") + `</h1><br>
                <ul id="highscoresList"></ul>

                <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
            </div>
        </div>
    </div>  
`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//Clears the scores and Initials in the local storage if the user selects 'clear score'
function clearScore() {
    localStorage.clear();
    localStorage.removeItem("highscore");
    localStorage.removeItem("highscoreName");

    // resetGame();
}

//Reset game function 
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var quizContent = `      
    <div class="container" id="start">
        <div class="row justify-content-center">
            <div class="col-10 col-lg-8 text-center">
                <h1>Code Quiz</h1> <br>
                <h2>Answer the following questions as quickly as you can!</h2> <br>
                <p><strong>Note: </strong>(Each incorrect answer will deduct 10 seconds from the timer!)</p>
                <button onclick="start()">Start</button>
            </div>
        </div>
    </div>        
   `;
    document.getElementById("quizBody").innerHTML = quizContent;
}


//deduct 10seconds from the timer if user chooses an incorrect answer
function incorrect() {
    timeLeft -= 10;
    next();
}

//increases the score by 10points if the user chooses the correct answer
function correct() {
    score += 10;
    next();
}

//loops through the questions 
function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    var quizContent =
        // `<div class="container" id="start">
        //     <div class="row justify-content-center">
        //         <div class="col-10 col-lg-8 text-center">`

        "<h2>" + questions[currentQuestion].title + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>";
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode


        //         `</div>
        //     </div>
        // </div>        
        // `;
    }


    document.getElementById("quizBody").innerHTML = quizContent;
}
