// arithmeticSeriesSum(1, 2, 5);
// Output: 25

// arithmeticSeriesSum(3, 3, 4);
// Output: 30

function arithmeticSeriesSum(a, d, n) {
  return (n / 2) * (2 * a + (n - 1) * d);
}

console.log(arithmeticSeriesSum(1, 2, 5));
console.log(arithmeticSeriesSum(3, 3, 4));
