/*
Check for Palindrome
Problem Statement:
Construct a Node.js function that determines whether a given string is a palindrome (reads the same backward as forward, ignoring case sensitivity).
*/

function checkPalindrome(inString) {
  let outString = inString.split("").reverse().join("");
  if (outString === inString) {
    return "Palindrome";
  } else return "Not Palindrome";
}

const inString = "MALAYALAM";
console.log(checkPalindrome(inString));
