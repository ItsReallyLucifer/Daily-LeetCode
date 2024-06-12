#  Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
#  Return the running sum of nums.

#  Example
#  Input: nums = [1,2,3,4]
#  Output: [1,3,6,10]



def running_sum(nums):
    running_sum = 0
    return [running_sum := running_sum + num for num in nums]


print(running_sum([1, 2, 3, 4]))  # Output: [1, 3, 6, 10]
print(running_sum([5, 8, 13, 16]))  # Output: [5, 13, 26, 42]
