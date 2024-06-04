// isBalanced("()"); 
// Output: true

// isBalanced("([)]"); 
// Output: false

function isBalanced(str) {
    let stack = [];
    let openingBrackets = ['(', '[', '{'];
    let closingBrackets = [')', ']', '}'];
    let bracketPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (let i = 0; i < str.length; i++) {
        let currentBracket = str[i];
        if (openingBrackets.includes(currentBracket)) {
            stack.push(currentBracket);
        } else if (closingBrackets.includes(currentBracket)) {
            let lastOpeningBracket = stack.pop();
            if (lastOpeningBracket !== bracketPairs[currentBracket]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}