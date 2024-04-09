#  You are given a positive integer array nums.
#  The Element sum is the sum of all the elements in nums.
#  The Digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
#  Return the absolute difference between the element sum and digit sum of nums.
#  Note that the absolute difference between two integers x and y is defined as |x - y|.



def difference_of_sum(nums):
    element_sum = 0
    digit_sum = 0

    for num in nums:
        digits = str(num)
        for digit in digits:
            digit_sum += int(digit)
        element_sum += num

    return abs(element_sum - digit_sum)

print(difference_of_sum([1, 15, 6, 3]))  # Output: 9


