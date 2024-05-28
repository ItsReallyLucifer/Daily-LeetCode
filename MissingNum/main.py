# Given an array nums containing 'n' distinct numbers in the range [0, n],
# return the only number in the range that is missing from the array.




def missing_number(nums):
    expected_sum = len(nums) * (len(nums) + 1) // 2
    actual_sum = sum(nums)
    
    return expected_sum - actual_sum

print(missing_number([3, 0, 1]))  # 2
print(missing_number([0, 4, 1, 2, 3, 6]))  # 5
