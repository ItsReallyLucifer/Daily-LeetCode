#  Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

#  The fn function takes one or two arguments:

#  arr[i] - number from the arr
#  i - index of arr[i]
#  filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.



def filter(arr, fn):
    filtered_arr = []
    
    for i in range(len(arr)):
        if fn(arr[i], i):
            filtered_arr.append(arr[i])
    
    return filtered_arr

# filtering function (checks if num is greater than 5)
def is_greater_than_five(num):
    return num > 5

arr = [2, 8, 4, 10, 3, 6]
filtered_result = filter(arr, is_greater_than_five)

print(filtered_result)  # [8, 10, 6]
