// factorial(5); // Output: 120
// factorial(0); // Output: 1

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(0));
