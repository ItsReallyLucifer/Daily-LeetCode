// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more than the previous value
// every subsequent time it is called (n, n + 1, n + 2, etc).





function createCounter(n) {
    return function() {
        return n++;
    };
}

const n = 10;
const counter = createCounter(n);

const output = ["call", "call", "call"].map(() => counter());
console.log(output); // [10, 11, 12]
