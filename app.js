'use strict';

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


var learnedCSS = prompt('Did I write in CSS years many years ago before even knowing what CSS stood for?')
var learnedCSSLower = learnedCSS.toLowerCase();
if (learnedCSSLower === 'yes' || learnedCSSLower === 'y') {
  alert('Oh heck ya!')
} else if (learnedCSSLower === 'no' || learnedCSSLower === 'n') {
  alert('False, I actually did that.');
} else {
  alert('Incorrect. You need to answer Yes or No.');
}
console.log(learnedCSSLower);


var photoExp = prompt('Do I have years of photography experience that results in impeccable design decisions?')
var photoExp = brokenBone.toLowerCase();
if (photoExp === 'yes' || photoExp === 'y') {
  alert('You better believe I do (although applying that design eye is still a work in progress).')
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
} else if (hardWorkingLower === 'no' || hardWorkingLower === 'n') {
  alert('You are incorrect, believe the legend as fact.');
} else {
  alert('Incorrect. You need to answer Yes or No.');
}
console.log(hardWorkingLower);
