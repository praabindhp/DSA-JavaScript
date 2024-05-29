// secondLargest([1, 2, 3, 4, 5]);
// Output: 4

// secondLargest([10, 20, 30, 40]);
// Output: 30

function secondLargest(arr) {
  let sorted = arr.sort((a, b) => b - a);
  return sorted[1];
}

const arr = [10, 30, 50, 20, 40];
console.log(secondLargest(arr));
