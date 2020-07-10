In this assignment I have built a timed quiz with multiple-choice questions. It includes two javascript files, two html files, a ccs style file, and this ReadMe.

The script.js file includes an array of all the office questions and answer choices given to the user. The array includes the correct answer as well. I have a start function that defines the time left on the timer, and includes the timer function that counts down from 75. When the timer hits 0 seconds, the game ends by the endGame function. The endGame function clears the timer, stores the Highscores, and displays the score to the user. It has an input included to where the user inputs initials.

The renderLastScore function, setScore function, and storeHighscores function renders the highscores from local storage, and stores the new score in local storage. The getScore function simply displays the newscore to the user in the Highscore display.

The resetGame function resets the game to be able to start a new quiz and the clearScore function clears the highscores stored in local storage if the user clicks on "clear".The incorrect function deducts 10 seconds from the timer for an incorrect answer and the correct function adds 10 points to the users score for a correct answer.

The next function loops through the array of questions to display to the user and uses a for loop to use the correct function and incorrect funtion.

In the highscores javascript file, the renderHighscores function allows each newscore to be added and stored to local storage so when the user clicks "view highscores" the user is displayed with a list of highscores. The View Highscores page is a link to the highscores html page.

I used css to style.
