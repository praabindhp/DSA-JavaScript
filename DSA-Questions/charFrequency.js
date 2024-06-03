// charFrequency("hello"); 
// Output: {h: 1, e: 1, l: 2, o: 1}

// charFrequency("mississippi"); 
// Output: {m: 1, i: 4, s: 4, p: 2}

function charFrequency(input) {
    let objValue = {}
    let arr = input.split("")
    for (let i = 0; i < arr.length; i++) {
        if (!objValue[arr[i]]) {
            objValue[arr[i]] = 1
        } else {
            objValue[arr[i]] += 1
        }
    }
    return objValue
}

console.log(charFrequency("mississippi"))