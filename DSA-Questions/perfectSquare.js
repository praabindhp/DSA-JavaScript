// isPerfectSquare(16);
// Output: true

// isPerfectSquare(20);
// Output: false

function isPerfectSquare(num) {
  return Math.sqrt(num) % 1 === 0;
}

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(20));
