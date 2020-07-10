//Highscore Page
var highscoreList = document.querySelector("#highscore-list");
var highscores = [];

init();

function renderHighscores() {
    // Clear todoList element and update todoCountSpan
    highscoreList.innerHTML = "";

    // Render a new div for each highscore
    for (var i = 0; i < highscores.length; i++) {
        var score = highscores[i].score;
        console.log(score);

        var div = document.createElement("div");
        div.style.color = "grey";
        div.style.textAlign = "center";
        div.style.fontSize = "20px"
        div.textContent = score;
        div.setAttribute("data-index", i);

        highscoreList.appendChild(div);
    }
}
function init() {
    // Get stored highscores from localStorage
    // Parsing the JSON string to an object
    var storedHighscores = JSON.parse(localStorage.getItem("highscores"));

    // If highscores were retrieved from localStorage, update the todos array to it
    if (storedHighscores !== null) {
        highscores = storedHighscores;
    }
    // Render highscores to the DOM
    renderHighscores();
}


//Clear Function 
function clearScore() {
    localStorage.clear();
    localStorage.removeItem("highscore");
    localStorage.removeItem("highscoreName");

    // resetGame();
}

