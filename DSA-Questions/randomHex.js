// randomHexColor();
// Output: "#3e2f1b" (example output, actual color will vary)

function randomHexColor() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += Math.floor(Math.random() * 16).toString(16);
  }
  return hex;
}

console.log(randomHexColor());
