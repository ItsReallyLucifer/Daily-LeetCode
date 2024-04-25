# Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
#  Return the array in the form [x1,y1,x2,y2,...,xn,yn]. 
#  Example:
#  Input: nums = [2,5,1,3,4,7], n = 3 (midpoint)
#  Output: [2,3,5,4,1,7] 
#  Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7]
#  x1=2, y1=3


def build_array(nums, n):
    result = []
    for i in range(n):
        result.extend([nums[i], nums[i + n]])
    return result

nums = [2, 5, 1, 3, 4, 7]
n = 3
result = build_array(nums, n)
print(result)  # Output: [2, 3, 5, 4, 1, 7]