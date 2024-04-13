#  Given an integer array nums of 2n integers, group these integers into n pairs
#  (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) 
#  for all i is maximized. Return the maximized sum.


def arrayPairSum(nums):
    nums.sort()
    sum = 0
    for i in range(0, len(nums), 2):
        sum += nums[i]
    return sum

nums = [1, 4, 3, 2]
result = arrayPairSum(nums)
print(result)  # 4
