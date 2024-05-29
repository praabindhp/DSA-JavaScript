// removeElement([1, 2, 3, 4, 2], 2);
// Output: [1, 3, 4]

// removeElement([5, 6, 7, 8, 7], 7);
// Output: [5, 6, 8]

function removeElement(arr, e) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (e !== arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeElement([5, 4, 3, 6, 3, 7], 3));
