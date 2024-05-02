# Given an integer n, return a counter function. 
# This counter function initially returns n and then returns 1 more than the previous value
# every subsequent time it is called (n, n + 1, n + 2, etc).



def create_counter(n):
    def counter():
        nonlocal n
        value = n
        n += 1
        return value
    return counter

n = 10
counter = create_counter(n)

output = [counter() for _ in range(3)]
print(output)  # Output: [10, 11, 12]
