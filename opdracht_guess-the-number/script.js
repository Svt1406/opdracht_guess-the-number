// determine username 

var getUsername = prompt(`What is your name?`);
alert(`${getUsername}, Welcome at Guess the Number!`);
alert(`You are going to guess a computer generated number.\n You can determine the range in which the number must be located.`);

// determine lowest and highest number and
// om de min en max af te ronden tot hele getallen. 
var lowNumber = prompt(`Please choose your lowest number?`);
var highNumber = prompt(`Please choose your highest number?`);
var min = Math.ceil(lowNumber);
var max = Math.floor(highNumber);
var chances = 0; 

// determine the chances to guess
if (max-min <5) {
    chances = 3;
} else if (max-min <10) {
    chances = 5;
} else if (max-min <15){
    chances = 8;
}else {
    chances = 12;
}

alert(`Good ${getUsername}, it is time to guess a number between ${min} and ${max}.\n You can try ${chances} times.`);

/* getting a random number between min and max
   the maximum is exclusive and the minimum is inclusive
*/

var numberToBeGuessed = Math.floor(Math.random() * (max - min) + min);
    console.log(`number to be guessed is: ${numberToBeGuessed}`);

// validate guessed number 
     
for (i = 0; i < chances; i++) {
    var guessed = prompt(`Enter a number:`);
    var guessedNumber = parseInt(guessed);
    console.log(`Number guessed by user ${guessed} try number ${i}`);
    if (guessedNumber === numberToBeGuessed) {
        alert(`Congratulations ${guessedNumber} was the number we were looking for`);
        i = chances; // exit loop
    } else if (guessedNumber < numberToBeGuessed){
        alert(`Sorry, the number is too low. Please try again.`);
    } else if (guessedNumber > numberToBeGuessed) {
        alert(`Sorry, the number is too high. Please try again.`);
    }
    if (i === chances-1) {
        alert(`Sorry ${getUsername} you lost!`);
    }
}

alert(`Thank you for participating.\n Have a good day ${getUsername}!`);
