/*
Find the Sum of All Elements in an Array
Problem Statement:
Write a Node.js function that takes an array of numbers and returns the sum of all its elements.
*/

function arraySum(nums) {
  let result = 0;
  for (let num of nums) {
    result += num;
  }
  return result;
}

let nums = [3, 2, 5, 8, 1, 9, 34, 67, 46];
// 175
// O(n)
console.log(arraySum(nums));
