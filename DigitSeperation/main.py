# Given an array of positive integers nums, return an array answer that consists -
# of the digits of each integer in nums after separating them in the same order they appear in nums.
# To separate the digits of an integer is to get all the digits it has in the same order.




def separate_digits(nums):
    answer = []
    for num in nums:
        digits = [int(d) for d in str(num)]
        answer.extend(digits)
    return answer

nums_arr = [10562, 158, 27]

print(separate_digits(nums_arr))  # [1, 0, 5, 6, 2, 1, 5, 8, 2, 7]
