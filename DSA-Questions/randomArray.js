// generateRandomArray(5);
// Output: [23, 5, 67, 38, 91] (example output, actual numbers will vary)

// generateRandomArray(3);
// Output: [45, 82, 16] (example output, actual numbers will vary)

function generateRandomArray(input) {
  let arr = [];
  for (let i = 0; i < input; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

console.log(generateRandomArray(5));
