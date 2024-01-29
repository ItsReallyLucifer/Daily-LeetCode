// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more than the previous value
// every subsequent time it is called (n, n + 1, n + 2, etc).




function createCounter(n: number) {
    return function (): number {
        return n++;
    };
}

const n: number = 10;
const counter = createCounter(n);

const output: number[] = ["call", "call", "call"].map(() => counter());
console.log(output); // [10, 11, 12]
