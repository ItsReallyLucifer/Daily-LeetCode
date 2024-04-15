#  Write a program that enhances all arrays such that you can call the array.last() method on any array 
#  and it will return the last element. If there are no elements in the array, it should return -1.
#  You may assume the array is the output of JSON.parse.



def last(arr):
    if len(arr) == 0:
        return -1
    else:
        return arr[-1]

# Example usage:
import json

nums = [None, {}, 3]
nums = json.loads(json.dumps(nums))
print(last(nums))  # 3
