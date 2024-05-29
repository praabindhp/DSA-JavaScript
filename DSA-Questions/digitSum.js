// sumOfDigits(123);
// Output: 6

// sumOfDigits(456);
// Output: 15

function sumOfDigits(input) {
  let sum = 0;
  while (input) {
    sum += input % 10;
    input = Math.floor(input / 10);
  }
  return sum;
}

console.log(sumOfDigits(123));
console.log(sumOfDigits(456));
