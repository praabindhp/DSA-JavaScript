// findMax([1, 2, 3, 4, 5]);
// Output: 5
// findMax([10, 9, 8, 7, 6]);
// Output: 10

function findMaxElement(arr) {
  let max = 0;
  if (arr.length == 0) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const arr = [2, 1, 7, 5, 8, 5, 3, 10, 1, 12, 34];
console.log(findMaxElement(arr));
