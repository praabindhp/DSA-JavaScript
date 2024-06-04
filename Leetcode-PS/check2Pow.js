// isPowerOfTwo(16);
// Output: true

// isPowerOfTwo(18);
// Output: false

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false