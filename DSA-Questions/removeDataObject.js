// removeProperty({a: 1, b: 2, c: 3}, 'b');
// Output: {a: 1, c: 3}

// removeProperty({x: 10, y: 20}, 'x');
// Output: {y: 20}

function removeProperty(objValues, prop) {
  delete objValues[prop];
  return objValues;
}

console.log(removeProperty({ a: 1, b: 2, c: 3 }, "b"));
console.log(removeProperty({ x: 10, y: 20 }, "x"));
