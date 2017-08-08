'use strict';

var prediction = prompt('Do you think you know me well?');
var predictionLower = prediction.toLowerCase();
if (predictionLower === 'yes' || predictionLower === 'y') {
  alert ('Oh really? You think so? Well good luck then.');
} else if (predictionLower === 'no' || predictionLower === 'n') {
  alert('Bummer, this is not going to go well.');
}  else {
  alert('You need to answer with a yes or no.');
}
console.log(predictionLower);


var birth = prompt('Did I live in Minnesota for over 10 years?')
var birthLower = birth.toLowerCase();
if (birthLower === 'yes' || birthLower === 'y') {
  alert('Oh yeah you betcha!')
} else if (birthLower === 'no' || birthLower === 'n') {
  alert('Sorry, that is not correct.');
} else {
  alert('Incorrect. You need to answer Yes or No.');
}
console.log(birthLower);


var brokenBone = prompt('Have I ever broken a bone?')
var brokenBoneLower = brokenBone.toLowerCase();
if (brokenBoneLower === 'yes' || brokenBoneLower === 'y') {
  alert('Negative, Im impervious.')
} else if (brokenBoneLower === 'no' || brokenBoneLower === 'n') {
  alert('Correct, I am invicible!');
} else {
  alert('Incorrect. You need to answer Yes or No.');
}
console.log(brokenBoneLower);

var grandmaGrave = prompt('Have I visited my great grandmother\'s grave in Scotland?')
var grandmaGraveLower = grandmaGrave.toLowerCase();
if (grandmaGraveLower === 'yes' || grandmaGraveLower === 'y') {
  alert('Ding, ding, winner!!')
} else if (grandmaGraveLower === 'no' || grandmaGraveLower === 'n') {
  alert('Sorry, that is not correct.');
} else {
  alert('Incorrect. You need to answer Yes or No.');
}
console.log(grandmaGraveLower);

var skyDived = prompt('Have I sky dived in 3 different countries?')
var skyDivedLower = skyDived.toLowerCase();
if (skyDivedLower === 'yes' || skyDivedLower === 'y') {
  alert('Not even close. I have never sky dived.')
} else if (skyDivedLower === 'no' || skyDivedLower === 'n') {
  alert('That is correct, I\'ve never even sky dived once.');
} else {
  alert('Incorrect. You need to answer Yes or No.');
}
console.log(skyDivedLower);
