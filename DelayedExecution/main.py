# Given a function fn, an array of arguments args, and a timeout t in milliseconds, 
# return a cancel function cancelFn.
# After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, 
# specifically at cancelT ms. In that case, fn should never be called.




from time import perf_counter
from threading import Timer

def cancellable(fn, args, t):
    cancelled = False

    def cancel_fn():
        nonlocal cancelled
        cancelled = True

    def wrapper():
        nonlocal cancelled
        if not cancelled:
            fn(*args)

    timer = Timer(t / 1000, wrapper)
    timer.start()

    return cancel_fn

def fn(x):
    return x * 5

args = [2]
t = 20
cancel_t = 50

result = []

def log(*args_arr):
    diff = round(perf_counter() - start, 2)
    result.append({"time": diff, "returned": fn(*args_arr)})

start = perf_counter()
cancel = cancellable(log, args, t)

max_t = max(t, cancel_t)

def cancel_timer():
    cancel()

Timer(cancel_t / 1000, cancel_timer).start()

def print_result():
    print(result)  # [{"time":20-21,"returned":10}]

Timer(65 / 1000, print_result).start()
