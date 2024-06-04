const obj = { a: 1, b: { c: 2, d: { e: 3 } } };

function maxDepth(obj) {
    let maximumDepth = 1;
    for (const key in obj) {
        if (typeof obj[key] === "object") {
            const depth = maxDepth(obj[key]) + 1;
            maximumDepth = Math.max(maximumDepth, depth);
        }
    }
    return maximumDepth;
}

console.log(maxDepth(obj)); // 3