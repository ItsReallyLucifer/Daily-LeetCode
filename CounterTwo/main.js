// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.



function createCounter(init) {
    let count = init; 
    
    return {
        increment: function() {
            return ++count; 
        },
        decrement: function() {
            return --count; 
        },
        reset: function() {
            count = init; 
            return count;
        }
    };
}

const counter = createCounter(5);
const calls = ["increment", "reset", "decrement"];
const result = calls.map(call => counter[call]());
console.log(result);
