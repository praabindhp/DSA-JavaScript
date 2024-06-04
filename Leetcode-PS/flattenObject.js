function flattenObject(obj) {
    const flattened = {};
    function flatten(obj, path = "") {
        for (const key in obj) {
            const value = obj[key];
            const newPath = path ? `${path}.${key}` : key;
            if (typeof value === "object") {
                flatten(value, newPath);
            } else {
                flattened[newPath] = value;
            }
        }
    }
    flatten(obj);
    return flattened;
}

const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
console.log(flattenObject(obj)); // Output: { 'a': 1, 'b.c': 2, 'b.d.e': 3 }