// mergeSortedArrays([1, 3, 5], [2, 4, 6]);
// Output: [1, 2, 3, 4, 5, 6]

// mergeSortedArrays([0, 9], [7, 10]);
// Output: [0, 7, 9, 10]

function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArrays([0, 9], [7, 10]));
