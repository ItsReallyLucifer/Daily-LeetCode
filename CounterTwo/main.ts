// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.



interface Counter {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
}

function createCounter(init: number): Counter {
    let count: number = init;

    return {
        increment: function (): number {
            return ++count;
        },
        decrement: function (): number {
            return --count;
        },
        reset: function (): number {
            count = init;
            return count;
        }
    };
}

const counter: Counter = createCounter(5);
const calls: string[] = ["increment", "reset", "decrement"];
const result: number[] = calls.map(call => counter[call]());
console.log(result);
