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
console.log(updateMonth(11));
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
console.log(today());

// console.log(monthDisplay(date));
// console.log(monthDisplay(3));

//! test
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
