function removeDuplicates(arr) {
  let objValues = {};
  let results = [];
  for (i = 0; i < arr.length; i++) {
    if (!objValues[arr[i]]) {
      objValues[arr[i]] = 1;
    } else {
      objValues[arr[i]] += 1;
    }
  }

  for (let key in objValues) {
    results.push(key);
  }

  return results;
}

const arr = [1, 2, 2, 4, 3, 5, 5, 6, 3, 9, 7, 8, 8, 9];
console.log(removeDuplicates(arr));
