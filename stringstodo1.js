// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(myStr) {
  var wordArray = myStr.split(" ");
  return wordArray.join("");
}
removeBlanks(" Pl ayTha tF u nkyM usi c ");


// Get Digits
// Create a JavaScript function that given a string, 
// returns the integer made from the string’s digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should 
// return the number 1357924680.

function getDigits(myStr) {
  var integerFromString = " ";

  if (myStr[0] == 0) {
    for (var i = 1; i < myStr.length; i++) {
      if(!isNaN(myStr[i])){
        integerFromString = integerFromString + myStr[i];
      }
    }
  } else {
    for (var i = 0; i < myStr.length; i++) {
      if(!isNaN(myStr[i])){
        integerFromString = integerFromString + myStr[i];
      }
    }
  }
  return integerFromString;
}
getDigits("0s1a3y5w7h9a2t4?6!8?0"); // Returns 1357924680
getDigits("1s1a3y5w7h9a2t4?6!8?0"); // Returns 11357924680


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function getAcronym(myStr) {
  var newStr = " ";

  if(!myStr.length) {
    return null
  } else {
    firstLetterArray = myStr.split(" ");
    for(var i = 0; i < firstLetterArray.length; i++) {
      if(firstLetterArray[i].charCodeAt(0) >= 65 && firstLetterArray[i].charCodeAt(0) <= 90 || firstLetterArray[i].charCodeAt(0) >= 97 && firstLetterArray[i].charCodeAt(0) <= 122 || firstLetterArray[i].charCodeAt(0) === 45) {
        newStr = newStr + String(firstLetterArray[i][0]);
      }
    }
  }
  newStr = newStr.toUpperCase();
  return newStr;
}
getAcronym(" there's no free lunch - gotta pay yer way. ");
getAcronym("Live from New York, it's Saturday Night!");


// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).


function countNonSpaces(myStr) {
  var newStr = myStr.split(" ");
  newStr = newStr.join("");
  console.log(newStr);
  return newStr.length;
}
countNonSpaces("Honey pie, you are driving me crazy");

function countNonSpaces(myStr) {
  var newStr = myStr.split(" ");
  newStr = newStr.join("");
  // console.log(newStr);
  return newStr.length;
}
countNonSpaces("Honey pie, you are driving me crazy");



// Remove Shorter Strings
// Given a string array and value (length), 
// remove any strings shorter than the length from the array.

function removeShorterStrings(stringArr, valLength) {
  var wordArray = stringArr.split(" ");
  var newArray = [];

  for (var i = 0; i < wordArray.length; i++){
    if(wordArray[i].length >= valLength) {
      newArray.push(wordArray[i]);
    }
  }
  return newArray;
}
removeShorterStrings("Algorithms are not my bag.", 4);