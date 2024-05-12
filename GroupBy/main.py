# Write a program that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
# A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
# The provided callback fn will accept an item in the array and return a string key.

# The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
# Please solve it without lodash's _.groupBy function.



def group_by(arr, fn):
    grouped = {}
    for item in arr:
        key = fn(item)
        if key not in grouped:
            grouped[key] = []
        grouped[key].append(item)
    return grouped

arr = [1, 2, 3, 4, 5]
grouped = group_by(arr, lambda item: 'even' if item % 2 == 0 else 'odd')

print(grouped)
# Output: {'odd': [1, 3, 5], 'even': [2, 4]}
