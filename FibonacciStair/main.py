#  You are climbing a staircase. It takes n steps to reach the top.
#  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

#  Example:
#  Input: n = 2
#  Output: 2
#  Explanation: There are two ways to climb to the top.
#  1. 1 step + 1 step
#  2. 2 steps


def climb_stairs(n):
    if n < 2:
        return 1
    first_step = 1
    second_step = 1
    third_step = 0
    for i in range(2, n + 1):
        third_step = first_step + second_step
        first_step = second_step
        second_step = third_step
    return third_step

n = 2
print(climb_stairs(n))  # 2
