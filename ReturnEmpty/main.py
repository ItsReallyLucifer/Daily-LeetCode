# Given an object or an array, return if it is empty.

# An empty object contains no key-value pairs.
# An empty array contains no elements.
# You may assume the object or array is the output of JSON.parse.

# Example 1:
# Input: obj = {"x": 5, "y": 42} || false

# Example 2:
# Input: obj = {} || true



def is_empty(obj):
    if isinstance(obj, list):
        return len(obj) == 0

    if isinstance(obj, dict):
        return len(obj) == 0

    return True


obj = {}
arr = []

print(is_empty(obj))  # Output: True
print(is_empty(arr))  # Output: True

non_empty_obj = {'key': 'value'}
non_empty_arr = [1, 2, 3]

print(is_empty(non_empty_obj))  # Output: False
print(is_empty(non_empty_arr))  # Output: False
