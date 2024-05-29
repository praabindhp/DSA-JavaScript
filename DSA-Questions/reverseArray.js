// reverseArray([1, 2, 3, 4, 5]);
// Output: [5, 4, 3, 2, 1]
// reverseArray([7, 8, 9]);
// Output: [9, 8, 7]

function reverseArray(arr) {
  let result = arr.reverse();
  return result;
}

function reverseString(input) {
  let output = input.split("").reverse().join("");
  return output;
}

const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));
console.log(reverseString("Praabindh"));
console.log(reverseArrayNormal(arr));
