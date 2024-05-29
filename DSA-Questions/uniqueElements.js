// uniqueElements([1, 2, 2, 3, 4, 4, 5]);
// Output: [1, 3, 5]

// uniqueElements([5, 5, 5, 5, 5]);
// Output: []

function uniqueElements(arr) {
  let objValues = {};
  let result = [];
  arr.forEach((element) => {
    if (!objValues[element]) {
      objValues[element] = 1;
    } else {
      objValues[element] += 1;
    }
  });
  Object.keys(objValues).forEach((key) => {
    if (objValues[key] === 1) {
      result.push(key);
    }
  });
  return result;
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));
