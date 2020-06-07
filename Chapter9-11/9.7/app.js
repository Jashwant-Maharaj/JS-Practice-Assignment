var secretNumber = 7;
var guessNumber = +prompt("Guess the Secret Number: ");

if(guessNumber === secretNumber){
    alert("Bingo! Correct answer");
}
if(guessNumber === secretNumber + 1 || guessNumber === secretNumber - 1){
    alert("Close enough to the correct answer");
}