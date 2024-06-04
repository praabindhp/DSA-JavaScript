function generatePermutations(str) {
    const result = [];
    backtrack(str.split(""), 0, result);
    return result;
}

function backtrack(str, start, result) {
    if (start === str.length) {
        result.push(str.join(""));
    } else {
        for (let i = start; i < str.length; i++) {
            swap(str, start, i);
            backtrack(str, start + 1, result);
            swap(str, start, i);
        }
    }
}

function swap(str, i, j) {
    const temp = str[i];
    str[i] = str[j];
    str[j] = temp;
}

console.log(generatePermutations("abc"));
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]