function slowFunction(num) {
    console.log('Calling Slow Function');
    return num * num;
}
const memoizedFunction = memoize(slowFunction);
console.log(memoizedFunction(10));
console.log(memoizedFunction(10));

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn(...args);
        cache[args] = result;
        return result;
    };
}