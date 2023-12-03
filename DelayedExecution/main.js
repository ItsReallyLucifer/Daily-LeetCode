// Given a function fn, an array of arguments args, and a timeout t in milliseconds, 
//return a cancel function cancelFn.
// After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, 
//specifically at cancelT ms. In that case, fn should never be called.


function cancellable(fn, args, t) {
    let cancelled = false;

    const cancelFn = () => {
        cancelled = true;
    };

    setTimeout(() => {
        if (!cancelled) {
            fn(...args);
        }
    }, t);

    return cancelFn;
}

const fn = (x) => x * 5;
const args = [2];
const t = 20;
const cancelT = 50;

const result = [];

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(...argsArr) });
};

const start = performance.now();
const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelT);

setTimeout(cancel, cancelT);

setTimeout(() => {
    console.log(result); // [{"time":20-21,"returned":10}]
}, 65);

