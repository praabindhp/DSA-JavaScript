// longestWord("The quick brown fox jumps over the lazy dog");
// Output: "jumps"

// longestWord("May the force be with you");
// Output: "force"

function longestWord(input) {
  let arr = input.split(" ");
  let maxWord = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxWord.length) {
      maxWord = arr[i];
    }
  }
  return maxWord;
}

let input = "May the force be with you praabindh";
console.log(longestWord(input));
