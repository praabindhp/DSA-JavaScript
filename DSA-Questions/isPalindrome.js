// isPalindrome("racecar"); // Output: true
// isPalindrome("hello");   // Output: false

function checkPalindrome(input) {
  if (!input) {
    return "Enter An Valid Input";
  }
  let result = input.split("").reverse().join("");
  if (result == input) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("malayalam"));
