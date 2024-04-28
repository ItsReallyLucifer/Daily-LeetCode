# Given an integer array of nums, return 'true' if any value appears atleast twice in the array,
# and return 'false' if every element is distinct.
# Example: input nums = [1,2,3,1] = true
# Example: input nums = [1,2,3,4] = false




def containsDuplicate(nums):
    if len(set(nums)) != len(nums):
        return True
    else:
        return False

print(containsDuplicate([1,2,3,4,5,5]))  # Output: True
print(containsDuplicate([1,2,3,4,5]))    # Output: False
