# Given an array of integers nums, return the number of good pairs.
# A pair (i, j) is called good if nums[i] == nums[j] and i < j.


def num_identical_pairs(nums):
    count = 0
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                count += 1
    return count

num_arr = [1, 2, 3, 1, 1, 3]
print(num_identical_pairs(num_arr))  # Output: 4
