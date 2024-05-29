// arraysEqual([1, 2, 3], [1, 2, 3]);
// Output: true
// arraysEqual([1, 2, 3], [3, 2, 1]);
// Output: false

function arraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysEqual([1, 2, 3], [3, 2, 1]));
