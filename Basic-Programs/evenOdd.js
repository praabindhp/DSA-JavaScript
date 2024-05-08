/*
Problem Statement:
Write a Node.js function that takes a number as input and returns "even" if the number is even, or "odd" if it's odd.
*/

function evenOdd(num) {
  if (num === 0) {
    return "Neither Even Nor Odd";
  }
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let num = 257;
console.log(evenOdd(num));
