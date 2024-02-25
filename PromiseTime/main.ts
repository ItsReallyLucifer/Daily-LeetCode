// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
// The time limited function should follow these rules:
// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".




function timeLimit<T>(fn: (...args: any[]) => Promise<T>, t: number): (...args: any[]) => Promise<T> {
    return async function (...args: any[]): Promise<T> {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                clearTimeout(timeout);
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result: T) => {
                    clearTimeout(timeout);
                    resolve(result);
                })
                .catch((error: any) => {
                    clearTimeout(timeout);
                    reject(error);
                });
        });
    };
}

const limited = timeLimit((t: number) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
