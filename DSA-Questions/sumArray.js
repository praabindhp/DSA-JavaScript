// sumArray([1, 2, 3, 4, 5]);
// Output: 15
// sumArray([10, 20, 30]);
// Output: 60

function sumArray(arr) {
  let result = arr.reduce((sum, e) => sum + e);
  return result;
}

console.log(sumArray([1, 2, 3, 4, 5]));
