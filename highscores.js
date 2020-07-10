//Highscore Page
var highscoreList = document.querySelector("#highscore-list");
// var highscores = [];

init();

function renderHighscores() {
    // Clear todoList element and update todoCountSpan
    highscoreList.innerHTML = "";
    if (!highscore) {
        highscore = [];
    }

    // Render a new div for each highscore
    for (var i = 0; i < highscore.length; i++) {
        var score = highscore[i].score;
        var name = highscore[i].initials;

        var div = document.createElement("div");
        div.style.color = "grey";
        div.style.textAlign = "center";
        div.style.fontSize = "20px"
        div.textContent = name + ": " + score;
        div.setAttribute("data-index", i);

        highscoreList.appendChild(div);
    }
}
function init() {
    // Get stored highscores from localStorage
    // Parsing the JSON string to an object
    var storedHighscores = JSON.parse(localStorage.getItem("highscore"));

    // If highscores were retrieved from localStorage, update the todos array to it
    if (storedHighscores !== null) {
        highscore = storedHighscores;
    }
    // Render highscores to the DOM
    renderHighscores();
}


//Clear Function 
function clearScore() {
    localStorage.clear();
    location.reload();

}

