// longestPalindrome("babad"); 
// Output: "bab" or "aba"

// longestPalindrome("cbbd");  
// Output: "bb"


function getAllSubstrings(str) {
    let substrings = [];

    for (let i = 0; i < str.length; i++) {
        let substring = '';
        for (let j = i; j < str.length; j++) {
            substring += str[j];
            substrings.push(substring);
        }
    }

    return substrings;
}

function findPalindrome(str) {
    const allSubstrings = getAllSubstrings(str);
    const palindromes = allSubstrings.filter(substring => {
        return substring === substring.split("").reverse().join("");
    });
    return palindromes;
}

function longestPalindrome(str) {
    const palindromes = findPalindrome(str);
    const longest = palindromes.reduce((a, b) => a.length >= b.length ? a : b, "");
    return longest;
}

const inputString = "abacada";
const allSubstrings = getAllSubstrings(inputString);
const palindromes = findPalindrome(inputString);
const longest = longestPalindrome(inputString);

console.log(allSubstrings);
console.log(palindromes);
console.log(longest);