// Array Shifting
// [1, 2, 0, 3, 0, 4, 0, 5, 6]
// [1, 2, 3, 4, 5, 6, 0, 0, 0]

function arrayShifting(arr) {
  let result = [];
  let zeros = 0;
  arr.map((e) => {
    if (e !== 0) {
      result.push(e);
    } else {
      zeros++;
    }
  });
  for (let i = 0; i < zeros; i++) {
    result.push(0);
  }
  return result;
}

console.log(arrayShifting([1, 3, 0, 4, 0, 2, 0, 5, 6]));
// [1, 3, 4, 2, 5, 6, 0, 0, 0]
