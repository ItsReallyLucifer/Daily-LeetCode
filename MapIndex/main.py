# // Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
# // That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

# // Return the answer in an array.




def smaller_numbers_than_current(nums):
    sorted_nums = sorted(nums)
    return [sorted_nums.index(num) for num in nums]

# Test case
nums = [8, 1, 2, 2, 3]
print(smaller_numbers_than_current(nums))  # Output: [4, 0, 1, 1, 3]
