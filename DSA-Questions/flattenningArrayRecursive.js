// deepFlatten([1, [2, [3, 4], [5]], 6]);
// Output: [1, 2, 3, 4, 5, 6]

// deepFlatten([[1, 2, [3]], 4, [[5, 6]]]);
// Output: [1, 2, 3, 4, 5, 6]

function deepFlatten(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val),
    []
  );
}

console.log(deepFlatten([1, [2, [3, 4], [5]], 6]));
console.log(deepFlatten([[1, 2, [3]], 4, [[5, 6]]]));
