#  Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
#  This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
#  If the length of the array is 0, the function should return init.
#  Please solve it without using the built-in Array.reduce method.



def reduce(nums, fn, init):
    if len(nums) == 0:
        return init  # Return init if the list is empty

    result = init
    for num in nums:
        result = fn(result, num)
    return result


array = [1, 2, 3, 4, 5]

addition = lambda accumulator, current_value: accumulator + current_value

initial_value = 0

result = reduce(array, addition, initial_value)

print(result)  # Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
