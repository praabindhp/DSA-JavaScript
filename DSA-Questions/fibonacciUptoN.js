// generateFibonacci(5);
// Output: [0, 1, 1, 2, 3]

// generateFibonacci(8);
// Output: [0, 1, 1, 2, 3, 5, 8, 13]

function generateFibonacci(n) {
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

console.log(generateFibonacci(5));
console.log(generateFibonacci(8));

// result = [0, 1]
// i = 2
// result = [0, 1, 1]
// i = 3
// result = [0, 1, 1, 2]
// i = 4
// result = [0, 1, 1, 2, 3]
// i = 5
// result = [0, 1, 1, 2, 3, 5]
// i = 6
// result = [0, 1, 1, 2, 3, 5, 8]
// i = 7
// result = [0, 1, 1, 2, 3, 5, 8, 13]
// i = 8
// [0, 1, 1, 2, 3, 5, 8, 13]
