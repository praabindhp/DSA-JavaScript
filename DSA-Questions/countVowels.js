// countVowels("hello");
// Output: 2

// countVowels("javascript");
// Output: 3

const vowelsArray = ["a", "e", "i", "o", "u"];

function countVowels(input) {
  let count = 0;
  let arr = input.split("");
  for (let i = 0; i < arr.length; i++) {
    if (vowelsArray.includes(arr[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels("Praabindh"));
