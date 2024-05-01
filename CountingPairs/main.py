# Given a 0-indexed integer array nums of length n and an integer target,
# return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
# Example:
# Input: nums = [-1,1,2,3,1], target = 2
# Output: 3 || There are 3 pairs of indices that satisfy the conditions in the statement




def count_pairs(nums, target):
    count = 0
    n = len(nums)

    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] < target:
                count += 1

    return count

nums = [-1, 1, 2, 3, 1]
target = 2

print(count_pairs(nums, target))  # Output: 3
