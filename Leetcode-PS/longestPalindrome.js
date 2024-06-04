// longestPalindrome("babad");
// Output: "bab" or "aba"

// longestPalindrome("cbbd");
// Output: "bb"

function longestPalindrome(input) {
    let longest = "";
    for (let i = 0; i < input.length; i++) {
        let oddPalindrome = expandFromCenter(input, i, i);
        let evenPalindrome = expandFromCenter(input, i, i + 1);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }
    return longest;
}

function expandFromCenter(input, left, right) {
    while (left >= 0 && right < input.length && input[left] === input[right]) {
        left--;
        right++;
    }
    return input.slice(left + 1, right);
}

const inputString = "abacada";
const longest = longestPalindrome(inputString);
console.log(longest);