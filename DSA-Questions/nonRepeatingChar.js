// firstNonRepeatingChar("swiss");
// Output: "w"

// firstNonRepeatingChar("hello");
// Output: "h"

function firstNonRepeatingChar(input) {
  let size = input.length;
  let objValues = {};
  for (let i = 0; i < size; i++) {
    if (!objValues[input[i]]) {
      objValues[input[i]] = 1;
    } else {
      objValues[input[i]] += 1;
    }
  }
  for (key in objValues) {
    if (objValues[key] == 1) {
      return key;
    }
  }
}

console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("hello"));
