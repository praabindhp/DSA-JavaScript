// sumNestedArray([1, [2, 3], [4, [5]]]);
// Output: 15

// sumNestedArray([[1, 2], [3, 4], [5]]);
// Output: 15

function sumNestedArray(arr) {
  let oriArray = arr.flat(Infinity);
  return oriArray.reduce((acc, val) => acc + val);
}

console.log(sumNestedArray([[1, 2], [3, 4], [5]]));
