// isDigitOnly("12345");
// Output: true

// isDigitOnly("123a5");
// Output: false

function isDigitOnly(input) {
  return /^\d+$/.test(input);
}

console.log(isDigitOnly("12345"));
console.log(isDigitOnly("123a5"));
