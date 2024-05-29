// arrayDifference([1, 2, 3, 4], [2, 4]); // Output: [1, 3]
// arrayDifference([5, 6, 7], [7, 8, 9]); // Output: [5, 6]

function arrayDifference(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

console.log(arrayDifference([1, 2, 3, 4], [2, 4]));
console.log(arrayDifference([5, 6, 7], [7, 8, 9]));
