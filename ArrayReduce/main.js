// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.



function reduce(nums, fn, init) {
    if (nums.length === 0) {
        return init; // Return init if the array is empty
    }

    let result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
}


const array = [1, 2, 3, 4, 5];

const addition = (accumulator, currentValue) => accumulator + currentValue;

const initialValue = 0;

const result = reduce(array, addition, initialValue);

console.log(result); // 15 (1 + 2 + 3 + 4 + 5 = 15)