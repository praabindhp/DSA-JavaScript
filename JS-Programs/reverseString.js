/*
String Reversal
Problem Statement:
Develop a Node.js function that reverses a given string.
*/

function stringReverse(inString) {
  let outString = "";
  for (let i = 0; i < inString.length; i++) {
    outString = inString[i] + outString;
  }
  return outString;
}

// O(n)

let inString = "Praabindh";
console.log(stringReverse(inString));
