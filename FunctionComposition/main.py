# Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
# The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
# The function composition of an empty list of functions is the identity function f(x) = x.
# You may assume each function in the array accepts one integer as input and returns one integer as output.



def compose(functions):
    if len(functions) == 0:
        return lambda x: x

    def composed(*args):
        result = functions[-1](*args)
        for func in reversed(functions[:-1]):
            result = func(result)
        return result

    return composed

fn = compose([lambda x: x + 1, lambda x: 2 * x])
print(fn(4))  # 9
