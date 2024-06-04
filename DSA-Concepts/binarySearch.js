// binarySearch([1, 2, 3, 4, 5], 3);
// Output: 2

// binarySearch([10, 20, 30, 40, 50], 25);
// Output: -1

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([10, 20, 30, 40, 50], 25));
