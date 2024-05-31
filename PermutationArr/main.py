# Given a zero-based permutation nums (0-indexed), 
# build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
# A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).


def build_array(nums):
    n = len(nums)
    ans = []

    for i in range(n):
        ans.append(nums[nums[i]])

    return ans

nums = [0, 2, 1, 5, 3, 4]
print(build_array(nums))  # [0, 1, 2, 4, 5, 3]
