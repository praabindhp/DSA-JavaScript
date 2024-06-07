function generateAlphabetSeries(inputSize) {
    const maxLimit = 10;
    let result = [];

    for (let i = Math.min(inputSize, maxLimit); i > 0; i--) {
        let line = [];
        for (let j = 0; j < i; j++) {
            line.push(String.fromCharCode(65 + j));
        }
        result.push(line.join(' '));
    }

    if (inputSize > maxLimit) {
        let line = [];
        for (let j = 0; j < inputSize; j++) {
            line.push(String.fromCharCode(65 + j));
        }
        result.unshift(line.join(' '));
    }

    return result.join('\n');
}

let inputSize = 4;
console.log(generateAlphabetSeries(inputSize));
// Output:
// A B C D
// A B C
// A B
// A

inputSize = 12;
console.log(generateAlphabetSeries(inputSize));
// Output:
// A B C D E F G H I J K
// A B C D E F G H I J
// A B C D E F G H I
// A B C D E F G H
// A B C D E F G
// A B C D E F
// A B C D E
// A B C D
// A B C
// A B
// A