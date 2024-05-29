// calculator(3, 4, "+");
// Output: 7

// calculator(10, 5, "/");
// Output: 2

function simpleCalculator(a, b, o) {
  if (o === "+") {
    return a + b;
  }
  if (o === "/") {
    return a / b;
  }
  if (o === "-") {
    return a - b;
  }
  if (o === "*") {
    return a * b;
  }
}

console.log(simpleCalculator(3, 4, "+"));
console.log(simpleCalculator(10, 5, "/"));
