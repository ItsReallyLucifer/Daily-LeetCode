# Write a function that returns the count of arguments passed to it.



def arguments_length(*args):
    return len(args)


print(arguments_length(7, 8, 9))  # Output: 3
print(arguments_length(5, 9, 'String', 1))  # Output: 4
