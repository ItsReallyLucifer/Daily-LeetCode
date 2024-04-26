# You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:
# The 2D array should contain only the elements of the array nums.
# Each row in the 2D array contains distinct integers.
# The number of rows in the 2D array should be minimal.
# Return the resulting array. If there are multiple answers, return any of them.
# Note that the 2D array can have a different number of elements on each row.


def find_matrix(nums):
    result = []
    
    for num in nums:
        found = False
        
        for row in result:
            if num not in row:
                row.append(num)
                found = True
                break
        
        if not found:
            result.append([num])
    
    return result

nums = [1, 2, 3, 4, 5, 1, 2, 6]
print(find_matrix(nums))  # [[1, 2, 3, 4, 5, 6], [1, 2]]
