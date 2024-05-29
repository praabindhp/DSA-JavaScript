// findMedian([1, 2, 3, 4, 5]);
// Output: 3

// findMedian([1, 2, 3, 4]);
// Output: 2.5

function findMedian(arr) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  if (n % 2 === 0) {
    return (arr[n / 2 - 1] + arr[n / 2]) / 2;
  } else {
    return arr[Math.floor(n / 2)];
  }
}

console.log(findMedian([1, 2, 3, 4, 5]));
console.log(findMedian([1, 2, 3, 4]));
