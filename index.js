// console.log("test");
//*Catch first word.
function firstWord(e) {
  let first = e.split(" ");
  return first[0];
}
// console.log(firstWord("Hello World"));
// firstWord("Hello World");

//*Length String
// var testPrompt = prompt("Ecrire une phrase : ");
var testPrompt = "toto";
var testWidth = testPrompt.length;
var test = testPrompt[0];
var result = "";
for (let i = 0; i < testWidth - 1; i++) {
  if (i == 0) {
    result = result + test.toUpperCase();
  } else if (i >= 1) {
    result += testPrompt[i];
  }
}
// console.log(result);
//*ou:
function firstLetterUp(e) {
  return e.charAt(0).toUpperCase() + e.slice(1, testWidth - 1);
}
var display = firstLetterUp(testPrompt);
// console.log(display);

//!Date
var date = new Date();
var localDate = date.toLocaleDateString();
var monthely = date.getMonth();
// console.log(localDate);
// console.log(date);
// console.log(month);

var monthTest = date.toLocaleString("fr-FR", { month: "long" });
// console.log(monthTest);
//*Month Response
function monthDisplay(e) {
  return e.toLocaleDateString("fr-FR", { month: "long" });
}
function updateMonth(e) {
  var date2 = new Date();
  date2.setMonth(e);

  return monthDisplay(date2);
}
// console.log(updateMonth(11));
//*today
function today() {
  var date3 = new Date();
  return date3.toLocaleString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
// console.log(today());

//!CamelCase
//*First part
var textCamel = "hello World salut le monde";

testWidth = textCamel.length + 1;

function lowerCase(e) {
  return e.toLocaleLowerCase();
}
var textLower = lowerCase(textCamel);

// console.log(firstLetterUp(textLower));

//*Second part
function camlCaseTool(e) {
  var tableWords = e.split(" ");
  // console.log(tableWords[1]);
  var sentence = tableWords[0];
  for (let i = 1; i < tableWords.length; i++) {
    tableWords[i] = firstLetterUp(tableWords[i]);
    sentence += tableWords[i];
  }
  return sentence;
}
console.log(camlCaseTool(textLower));

//*num in letter
//TODO: numberToLetters(1)=="un"

const wordArray = [
  "zero",
  "un",
  "deux",
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf",
];
const wordArrayExceptDix = [
  "dix",
  "onze",
  "douze",
  "treize",
  "quatorze",
  "quinze",
  "seize",
  "dix-sept",
  "dix-huight",
  "dix-neuf",
];
const wordArrayExceptDixPlus = [
  "vingt",
  "trente",
  "quarante",
  "cinquante",
  "soixante",
  "soixante",
  "quatre-vingt",
  "quatre-vingt",
];

function numToLet(e) {
  let numArray = e.toString().split("");
  let index = e.toString().length;
  console.log(index);
  let sentenceInLet = "";
  //*mille
  if (numArray.length == 4) {
    sentenceInLet += wordArray[numArray[numArray.length - 4]] + "-mille ";
    if (numArray[numArray.length - 4] == 1) {
      sentenceInLet = "mille ";
    }
  }
  //*centaine
  if (numArray.length == 3 || numArray.length == 4) {
    sentenceInLet += wordArray[numArray[numArray.length - 3]] + "-cent ";
    if (numArray[numArray.length - 3] == 1) {
      sentenceInLet = "cent ";
    }
  }
  //*Dizaine
  if (e > 9 && e < 17) {
    console.log(e - 10);
    sentenceInLet += wordArrayExceptDix[e - 10];
    return sentenceInLet;
  }
  if (numArray[numArray.length - 2] == 1) {
    sentenceInLet +=
      wordArrayExceptDix[0] + "-" + wordArray[numArray[numArray.length - 1]];
    return sentenceInLet;
  }
  //*vingt à soixante et quatre-vingt
  if (
    (numArray[numArray.length - 2] >= 2 && numArray[numArray.length - 2] < 7) ||
    numArray[numArray.length - 2] == 8
  ) {
    if (numArray[numArray.length - 1] == 0) {
      sentenceInLet +=
        wordArrayExceptDixPlus[numArray[numArray.length - 2] - 2];
      return sentenceInLet;
    }
    //*et un
    if (numArray[numArray.length - 1] == 1) {
      sentenceInLet +=
        wordArrayExceptDixPlus[numArray[numArray.length - 2] - 2] +
        " et " +
        wordArray[numArray[1]];
      return sentenceInLet;
    }
    //*no filter
    sentenceInLet +=
      wordArrayExceptDixPlus[numArray[numArray.length - 2] - 2] +
      "-" +
      wordArray[numArray[numArray.length - 1]];
    return sentenceInLet;
  }
  //*70+ or 90+
  if (
    numArray[numArray.length - 2] == 7 ||
    numArray[numArray.length - 2] == 9
  ) {
    if (
      numArray[numArray.length - 1] == 1 &&
      numArray[numArray.length - 2] == 7
    ) {
      sentenceInLet +=
        wordArrayExceptDixPlus[numArray[numArray.length - 2] - 2] +
        " et " +
        wordArrayExceptDix[numArray[numArray.length - 1]];
      return sentenceInLet;
    }
    sentenceInLet +=
      wordArrayExceptDixPlus[numArray[numArray.length - 2] - 2] +
      "-" +
      wordArrayExceptDix[numArray[numArray.length - 1]];
    return sentenceInLet;
  }

  //*No exception
  for (let i = 0; i < index; i++) {
    sentenceInLet += wordArray[numArray[i]] + " ";
  }

  return sentenceInLet;
}
console.log(numToLet(9579));

//! test
// camlCaseTool(textLower);

// console.log(tableWords);
// function camlCaseTool(e){
// for(let i = 0;i<testWidth; i++){

// }}

// console.log(monthDisplay(date));
// console.log(monthDisplay(3));
// console.log(testPrompt.length);
// console.log(test);
//

// console.log(testPrompt[0]);
// testPrompt.push(testPrompt[0].toUpperCase());
// console.log(testPrompt);

// testPrompt = testPrompt.split();
// console.log(testPrompt);

// const title = document.getElementById("title");
// console.log(title);
