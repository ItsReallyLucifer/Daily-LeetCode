# The majority element is the element that appears more than ⌊n / 2⌋ times.
# You may assume that the majority element always exists in the array.




def majority_element(nums):
    count = 0
    candidate = None

    for num in nums:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1

    return candidate

# Test cases
print(majority_element([3, 2, 3]))  # Output: 3
print(majority_element([2, 2, 1, 1, 1, 2, 2]))  # Output: 2
