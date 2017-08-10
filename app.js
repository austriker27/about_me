'use strict';

var name = prompt('What is your name?')

var correctAnswers = []
var prediction = prompt('Welcome to the quiz about me. Do you think you know me well?');
var predictionLower = prediction.toLowerCase();
if (predictionLower === 'yes' || predictionLower === 'y') {
  alert ('Oh really? You think so? Well good luck then.');
} else if (predictionLower === 'no' || predictionLower === 'n') {
  alert('Bummer, this is not going to go well.');
}  else {
  alert('You need to answer with a yes or no.');
}
console.log(predictionLower);


var learnedCSS = prompt('Did I modify CSS files many years ago before even knowing what CSS stood for?')
var learnedCSSLower = learnedCSS.toLowerCase();
if (learnedCSSLower === 'yes' || learnedCSSLower === 'y') {
  alert('Oh heck ya!')
  correctAnswers.push(1);
} else if (learnedCSSLower === 'no' || learnedCSSLower === 'n') {
  alert('False, I actually did that.');
} else {
  alert('Incorrect. You need to answer Yes or No.');
}
console.log(learnedCSSLower);


var photoExp = prompt('Do I have years of photography experience that results in impeccable design decisions?')
var photoExp = photoExp.toLowerCase();
if (photoExp === 'yes' || photoExp === 'y') {
  alert('You better believe I do (although applying that design eye is still a work in progress).')
  correctAnswers.push(1);
} else if (photoExp === 'no' || photoExp === 'n') {
  alert('False, I do have years of photography experience.');
} else {
  alert('Incorrect. You need to answer Yes or No.');
}
console.log(photoExp);

var dundieWinner = prompt('Am I the receipient of multiple Dundie Awards?')
var dundieWinnerLower = dundieWinner.toLowerCase();
if (dundieWinnerLower === 'yes' || dundieWinnerLower === 'y') {
  alert('Ding, ding, winner! I have indeed won multiple Dundees. ')
  correctAnswers.push(1);
} else if (dundieWinnerLower === 'no' || dundieWinnerLower === 'n') {
  alert('Sorry, that is not correct. I have won many Dundies!');
} else {
  alert('Incorrect. You need to answer Yes or No.');
}
console.log(dundieWinnerLower);

var hardWorking = prompt('Legend tells a tale of a David A. Lindahl working straight for seven days without food nor rest in order to meet a deadline with a flawless, beautiful product. Is this true?')
var hardWorkingLower = hardWorking.toLowerCase();
if (hardWorkingLower === 'yes' || hardWorkingLower === 'y') {
  alert('Yup, the legend does not lie.')
  correctAnswers.push(1);
} else if (hardWorkingLower === 'no' || hardWorkingLower === 'n') {
  alert('You are incorrect, you must believe the legend is fact.');
} else {
  alert('Incorrect. You need to answer Yes or No.');
}
console.log(hardWorkingLower);

// 6th question
for (i = 0; i < 4; i++) {
  var statesBeen = prompt('Okay, time to get serious... How many states in the USA have I been to? You only get 4 attempts, choose wisely!')
  if (statesBeen === '47') {
    alert('Wow, that was impressive! You win!')
    correctAnswers.push(1);
    break;
  } else if (statesBeen >= '0' && statesBeen < '47') {
    alert('Nope, try a little higher.')
  } else if (statesBeen > '47') {
    alert('Whoa, too high. Try guessing something lower.')
  } else {
    alert('Hey there, don\'t be silly. Put a number in.')
  }
  console.log(statesBeen);
  }


// 7th question
var statesNotLived = ['north dakota', 'arizona', 'nevada'];

for ( var i = 0; i < 6; i++) {
  var statesLivedGuess = prompt('Okay smartypants, lets try one final question.. Which states haven\'t I been to?')
  console.log(statesLivedGuess);
  if (statesLivedGuess.toLowerCase() === statesNotLived[0] || statesNotLived[1] || statesNotLived[2] || i === 6) {
    alert('You win! I have not been to the states of: ' + statesNotLived[0].toString() + ', ' + statesNotLived[1].toString() + ', ' + statesNotLived[2].toString() + '.' );
    correctAnswers.push(1);
    break;
  } else {
    alert('Negative Ghostrider!')
  }
}

alert('Congrats, ' + name + ' you got ' + (correctAnswers.length + 1) + ' out of 7 questions correct. Come again soon!')


// directions :
// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.
// As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
// As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."
