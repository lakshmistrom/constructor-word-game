// should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
function Letter (letter, guess){
    //letter is a string value to store the underlying character for the letter
    this.letter = letter;

    //guess is a boolean value that stores whether that letter has been guessed yet
    this.guess = guess;

    // returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.hasGuessed = function(){
        if(this.guess === true){
            console.log(this.letter);
            //return this.letter;
        } else{
            console.log("_");
            //return "_";
        }
    }
    // takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.willGuess = function(guessedLetter){
        if(this.letter === guessedLetter){
            //update guess
            this.guess = true;
            //output the letter as well
            this.hasGuessed();
        } else{
            //update guess
            this.guess =false;
            this.hasGuessed();
        }
        console.log(this.guess);
        return this.guess;
    }
}
//makes a new Letter
var guesses = new Letter("a", false);

//output the data stored in Letter
console.log(guesses);

//test hasGuessed function
//guesses.hasGuessed();

//test willGuess function for false value
//guesses.willGuess("b");

//test willGuess function for true value
guesses.willGuess("a");