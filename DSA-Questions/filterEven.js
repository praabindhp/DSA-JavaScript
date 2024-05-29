// filterEvens([1, 2, 3, 4, 5]);
// Output: [2, 4]
// filterEvens([10, 15, 20, 25]);
// Output: [10, 20]

function filterEven(arr) {
  return arr.filter((e) => e % 2 == 0);
}

console.log(filterEven([1, 2, 3, 4, 5]));
