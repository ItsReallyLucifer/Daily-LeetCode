// Given a function fn, an array of arguments args, and a timeout t in milliseconds, 
//return a cancel function cancelFn.
// After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, 
//specifically at cancelT ms. In that case, fn should never be called.



type CancelFunction = () => void;

function cancellable(fn: (...args: any[]) => void, args: any[], t: number): CancelFunction {
    let cancelled = false;

    const cancelFn: CancelFunction = () => {
        cancelled = true;
    };

    setTimeout(() => {
        if (!cancelled) {
            fn(...args);
        }
    }, t);

    return cancelFn;
}

const fn = (x: number) => x * 5;
const args: number[] = [2];
const t: number = 20;
const cancelT: number = 50;

const result: { time: number; returned: number }[] = [];

// Explicitly annotate argsArr as a tuple
const log = (...argsArr: [number]) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ time: diff, returned: fn(...argsArr) });
};

const start = performance.now();
const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelT);

setTimeout(cancel, cancelT);

setTimeout(() => {
    console.log(result); // [{"time":20-21,"returned":10}]
}, 65);

