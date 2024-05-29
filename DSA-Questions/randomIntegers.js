randomIntBetween(1, 10);
// Output: 7 (example output, actual number will vary)

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(1, 10));
console.log(randomIntBetween(20, 100));
