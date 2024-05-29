// rotateArray([1, 2, 3, 4, 5], 2);
// Output: [4, 5, 1, 2, 3]
// rotateArray([7, 8, 9], 1);
// Output: [9, 7, 8]

function rotateArray(arr, k) {
  let result = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    result[(i + k) % n] = arr[i];
  }
  return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([7, 8, 9], 1));
