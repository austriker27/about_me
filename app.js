'use strict';

var name = prompt('Vat is your name?');

var correctAnswers = [];

function predictionF() {
  var prediction = prompt('Welcome to the quiz about me. Do you think you know me well?');
  var predictionLower = prediction.toLowerCase();
  if (predictionLower === 'yes' || predictionLower === 'y') {
    alert ('Oh really? You think so? Well good luck then. Muhahahaha');
  } else if (predictionLower === 'no' || predictionLower === 'n') {
    alert('Bummer, this is not going to go well.');
  } else {
    alert('Uhmmm, You need to answer with a yes or no.');
  }
  console.log(predictionLower);
}
predictionF();

function brokenBonesF() {
  var brokenBones = prompt('Have I ever broken a bone?');
  var brokenBonesLower = brokenBones.toLowerCase();
  if (brokenBonesLower === 'yes' || brokenBonesLower === 'y') {
    alert ('Really? How clumsy do you think I am?');
  } else if (brokenBonesLower === 'no' || brokenBonesLower === 'n') {
    alert('Well done. I drank a lot of milk as a wee lad. Never have I ever gotten the chickenpox either.');
    correctAnswers.push(1);
  } else {
    alert('Ahem, once again, you need to answer with a yes or no.');
  }
  console.log(brokenBonesLower);
}
brokenBonesF();

function learnedCSSF() {
  var learnedCSS = prompt('Did I modify CSS files back in 2009 even before knowing what CSS stood for?');
  var learnedCSSLower = learnedCSS.toLowerCase();
  if (learnedCSSLower === 'yes' || learnedCSSLower === 'y') {
    alert('Oh heck ya!');
    correctAnswers.push(1);
  } else if (learnedCSSLower === 'no' || learnedCSSLower === 'n') {
    alert('False, I actually did that.');
  } else {
    alert('Incorrect. You need to answer Yes or No.');
  }
  console.log(learnedCSSLower);
}
learnedCSSF();

function photoExpF() {
  var photoExp = prompt('Have I shot over 50,000 photographs since 2009?');
  var photoExp = photoExp.toLowerCase();
  if (photoExp === 'yes' || photoExp === 'y') {
    alert('As as a matter of fact I have. It sounds impressive until you look at many old photos I need cull and process. ');
    correctAnswers.push(1);
  } else if (photoExp === 'no' || photoExp === 'n') {
    alert('False. I have indeed taken quite a few photographs.');
  } else {
    alert('Hey now, pay attention to the question!');
  }
  console.log(photoExp);
}
photoExpF();

function dundieWinnerF() {
  var dundieWinner = prompt('Am I the receipient of multiple Dundie Awards?');
  var dundieWinnerLower = dundieWinner.toLowerCase();
  if (dundieWinnerLower === 'yes' || dundieWinnerLower === 'y') {
    alert('Ding, ding, winner! I have indeed won multiple Dundees. ');
    correctAnswers.push(1);
  } else if (dundieWinnerLower === 'no' || dundieWinnerLower === 'n') {
    alert('Sorry, that is not correct. I have won many Dundies!');
  } else {
    alert('Yes or no, it is not that hard!');
  }
  console.log(dundieWinnerLower);
}
dundieWinnerF();

function hardworkingF() {
  var hardWorking = prompt('Legend tells a tale of a David A. Lindahl working straight for seven days without food nor rest in order to meet a deadline with a flawless, beautiful product. Is this true?');
  var hardWorkingLower = hardWorking.toLowerCase();
  if (hardWorkingLower === 'yes' || hardWorkingLower === 'y') {
    alert('Yup, the legend does not lie.');
    correctAnswers.push(1);
  } else if (hardWorkingLower === 'no' || hardWorkingLower === 'n') {
    alert('You are incorrect, you must believe the legend is fact.');
  } else {
    alert('Hmmmm');
  }
  console.log(hardWorkingLower);
}
hardworkingF();

function statesBeenF() {
  for (var i = 0; i < 4; i++) {
    var statesBeen = prompt('Okay, time to get serious... How many states in the USA have I been to? You only get 4 attempts, choose wisely!');
    if (parseInt(statesBeen) === 47) {
      alert('Wow, that was impressive! You win!');
      correctAnswers.push(1);
      break;
    } else if (parseInt(statesBeen) >= '0' && parseInt(statesBeen) < '47') {
      alert('Nope, try a little higher.');
    } else if (parseInt(statesBeen) > '47') {
      alert('Whoa, too high. Try guessing something lower.');
    } else {
      alert('Hey, don\'t be silly. Enter a number between 1-50.');
    }
    console.log(statesBeen);
  }
}
statesBeenF();

function statesLivedGuessF() {
  for (var i = 0; i < 6; i++) {
    var statesLivedGuess = prompt('Okay smartypants, lets try one final question.. Which states haven\'t I been to?');
    console.log(statesLivedGuess);
    var statesNotLived = ['north dakota', 'delaware', 'nevada'];
    if (statesNotLived.includes(statesLivedGuess.toLowerCase())) {
      alert('You win! I have not been to the states of: ' + statesNotLived[0].toString() + ', ' + statesNotLived[1].toString() + ', or ' + statesNotLived[2].toString() + '.' );
      correctAnswers.push(1);
      break;
    } else {
      alert('Negative Ghostrider!');
    }
  }
}
statesLivedGuessF();

alert('Congrats, ' + name + '.  You got ' + (correctAnswers.length + 1) + ' out of 7 questions correct. Come again soon!');
