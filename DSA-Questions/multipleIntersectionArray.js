// intersectionOfArrays([1, 2, 3], [2, 3, 4], [3, 4, 5]);
// Output: [3]

// intersectionOfArrays([5, 10, 15], [10, 20], [10, 30]);
// Output: [10]

function intersectionOfArrays(arr1, arr2, arr3) {
  let size = arr1.length;
  let result = [];
  for (let i = 0; i < size; i++) {
    if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

console.log(intersectionOfArrays([1, 2, 3], [2, 3, 4], [3, 4, 5]));
console.log(intersectionOfArrays([5, 10, 15], [10, 20], [10, 30]));
