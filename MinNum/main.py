# You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

# Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
# Now, first Bob will append the removed element in the array arr, and then Alice does the same.
# The game continues until nums becomes empty.
# Return the resulting array arr




def number_game(nums):
    nums.sort()

    for i in range(0, len(nums), 2):
        if i + 1 < len(nums):
            nums[i], nums[i + 1] = nums[i + 1], nums[i]

    return nums

nums = [4, 5, 1, 3, 2]
result = number_game(nums)
print(result)  # [2, 1, 4, 3, 5]

