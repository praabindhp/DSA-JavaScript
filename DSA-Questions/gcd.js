// findGCD(48, 18);
// Output: 6

// findGCD(100, 25);
// Output: 25

function findGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}

console.log(findGCD(48, 18));
console.log(findGCD(100, 25));
