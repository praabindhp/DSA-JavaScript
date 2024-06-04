/*
Factorial Calculation
Problem Statement:
Implement a Node.js function that calculates the factorial of a non-negative integer.
The factorial of a number is the product of all positive integers less than or equal to that number.
*/

function factorial(num) {
  if (num == 1 || num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let num = 5;
// 5! = 5 * 4 * 3 * 2 * 1
console.log(factorial(num));
// 120
