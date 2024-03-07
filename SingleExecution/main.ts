// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.




function once<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> | undefined {
    let called = false;
    let result: ReturnType<T>;

    return function (...args: Parameters<T>): ReturnType<T> | undefined {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    };
}

// Example usage:
function exampleFunction(a: number, b: number): number {
    return a + b;
}

const onceExampleFunction = once(exampleFunction);

console.log(onceExampleFunction(2, 3)); // Output: 5
console.log(onceExampleFunction(4, 5)); // Output: undefined
