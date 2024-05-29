// countWords("Hello world!");
// Output: 2

// countWords("This is a test sentence.");
// Output: 5

function countWords(input) {
  let result = input.split(" ");
  return result.length;
}

console.log(countWords("This is a test sentence."));
