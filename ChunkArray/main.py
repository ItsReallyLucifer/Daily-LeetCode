#  Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, 
#  but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
#  You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
#  Please solve it without using lodash's _.chunk function.



def chunk(arr, size):
    chunked = []
    index = 0

    while index < len(arr):
        chunked.append(arr[index : index + size])
        index += size

    return chunked

arr = [1, 2, 3, 4, 5]
size = 1
result = chunk(arr, size)
print(result)  # Output: [[1], [2], [3], [4], [5]]
