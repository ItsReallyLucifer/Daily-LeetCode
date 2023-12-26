// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.



function once(fn) {
    let hasBeenCalled = false;
    let result;

    return function (...args) {
        if (!hasBeenCalled) {
            result = fn(...args);
            hasBeenCalled = true;
            return result;
        } else {
            return undefined;
        }
    };
}


function exampleFunction(a, b) {
    return a + b;
}

const functionCalledOnce = once(exampleFunction);

console.log(functionCalledOnce(2, 3)); // 5
console.log(functionCalledOnce(4, 5)); // undefined
