// countOccurrences([1, 2, 2, 3, 2, 4], 2); // Output: 3
// countOccurrences([5, 5, 5, 5, 5], 5);    // Output: 5

function countOccurrences(arr, x) {
  let objValues = {};
  for (let i = 0; i < arr.length; i++) {
    if (!objValues[arr[i]]) {
      objValues[arr[i]] = 0;
    }
    objValues[arr[i]] += 1;
  }

  return objValues[x];
}

console.log(countOccurrences([5, 5, 5, 5, 5], 5));
