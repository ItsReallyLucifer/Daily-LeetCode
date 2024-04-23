# Given an integer array nums of size n, return the number with the value closest to 0 in nums. 
# If there are multiple answers, return the number with the largest value.



def findClosestNumber(nums):
    closest = nums[0]

    for i in range(1, len(nums)):
        if abs(nums[i]) < abs(closest) or (abs(nums[i]) == abs(closest) and nums[i] > closest):
            closest = nums[i]

    return closest


numbers = [2, -10, 19, -27, 5]
print(findClosestNumber(numbers))  # Output: 2
