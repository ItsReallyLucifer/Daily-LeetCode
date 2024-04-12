#  Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
#  The returned array should be created such that returnedArray[i] = fn(arr[i], i).
#  Please solve it without the built-in Array.map method.


def map(arr, fn):
    mapped_array = []
    for i in range(len(arr)):
        mapped_array.append(fn(arr[i], i))
    return mapped_array

arr = [1, 2, 3]
def plus_one(n):
    return n + 1

new_array = map(arr, plus_one)
print(new_array)  # Output: [2, 3, 4]
