// capitalizeWords("hello world");
// Output: "Hello World"

// capitalizeWords("javascript is fun");
// Output: "Javascript Is Fun"

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function capitalizeFirstWord(str) {
  let words = str.split(" ");
  let capitalizedWords = words.map((word) => {
    let firstLetter = word.charAt(0).toUpperCase();
    let restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(" ");
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("javascript is fun"));

console.log(capitalizeFirstWord("hello world"));
console.log(capitalizeFirstWord("javascript is fun"));
