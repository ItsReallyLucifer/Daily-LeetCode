# Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
# The three functions are:
# increment() increases the current value by 1 and then returns it.
# decrement() reduces the current value by 1 and then returns it.
# reset() sets the current value to init and then returns it.



def create_counter(init):
    count = init

    def increment():
        nonlocal count
        count += 1
        return count

    def decrement():
        nonlocal count
        count -= 1
        return count

    def reset():
        nonlocal count
        count = init
        return count

    return {
        "increment": increment,
        "decrement": decrement,
        "reset": reset
    }

counter = create_counter(5)
calls = ["increment", "reset", "decrement"]
result = [counter[call]() for call in calls]
print(result)
