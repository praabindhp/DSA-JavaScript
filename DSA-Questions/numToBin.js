// toBinary(5);
// Output: "101"

// toBinary(10);
// Output: "1010"

function toBinary(input) {
  let result = "";
  while (input) {
    result = (input % 2) + result;
    input = Math.floor(input / 2);
  }
  return result;
}

console.log(toBinary(15));
// input = 15,
// result = "",
// input % 2 = 1,
// result = "1",
// input = 7,
// input % 2 = 1,
// result = "11",
// input = 3,
// input % 2 = 1,
// result = "111",
// input = 1,
// input % 2 = 1,
// result = "1111",

console.log(toBinary(10));
