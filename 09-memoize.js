function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);

        return result;
    };
}

// Test the function
let calculationCount = 0;

const square = memoize(function (n) {
    calculationCount++;
    return n * n;
});

console.log("Task 09: Memoization");
console.log("First call:", square(5));
console.log("Second call:", square(5));
console.log("Actual calculations:", calculationCount);

