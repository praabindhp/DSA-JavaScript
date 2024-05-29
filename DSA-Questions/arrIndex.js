function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
}

const arr = [1, 8, 4, 6, 3, 9];
let target = 9;

console.log(findIndex(arr, target));

// Hashmaps
// TC ~ O(1) For Searching An Element With Its Key

const objValues = {};

for (let i = 0; i < arr.length; i++) {
  objValues[arr[i]] = i;
}

console.log(objValues);

console.log(objValues[9]);
console.log(objValues[6]);
console.log(objValues[4]);
