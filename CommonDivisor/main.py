# Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
# The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.



def find_gcd(nums):
    min_num = min(nums)
    max_num = max(nums)

    def gcd(a, b):
        while b != 0:
            temp = b
            b = a % b
            a = temp
        return a

    return gcd(min_num, max_num)

nums = [18, 24, 36]
result = find_gcd(nums)
print(result)  # 18
