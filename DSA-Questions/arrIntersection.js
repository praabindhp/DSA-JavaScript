// intersection([1, 2, 3], [2, 3, 4]); // Output: [2, 3]
// intersection([5, 6, 7], [7, 8, 9]); // Output: [7]

function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  return result;
}

console.log(intersection([1, 2, 3], [2, 3, 4]));
