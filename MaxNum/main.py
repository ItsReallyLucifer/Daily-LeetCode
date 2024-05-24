# // Given an integer array nums, return the third distinct maximum number in this array. 
# // If the third maximum does not exist, return the maximum number.
# // Example: Input: nums = [3,2,1] | Output: 1



def third_max(nums):
    nums = list(set(nums))  # Remove duplicates
    nums.sort(reverse=True)  # Sort in descending order

    if len(nums) < 3:
        return nums[0]  # Return the maximum if there are less than 3 unique numbers
    else:
        return nums[2]  # Return the third maximum

# Test cases
print(third_max([2, 3, 1]))  # Output: 1
print(third_max([4, 7, 2, 6]))  # Output: 4
