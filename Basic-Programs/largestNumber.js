/*
Find the Largest Number
Problem Statement:
Create a Node.js function that accepts an array of numbers and returns the largest number within the array.
*/

function largestNumber(nums) {
  let result = nums.sort((a, b) => b - a);
  return result[0];
}

// O(n log n)

function largestNumberFor(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

// O(n)

const nums = [6, 3, 0, 8, 4];
console.log(largestNumberFor(nums));
