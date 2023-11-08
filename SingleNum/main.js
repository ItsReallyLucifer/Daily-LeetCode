// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// implement a solution with a linear runtime complexity and use only constant extra space.


function singleNumber(nums) {
    let result = 0;

    // XOR all elements in the array.
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i]
    }

    return result;
}

const testArray = [4, 1, 2, 1, 2]; 
const result = singleNumber(testArray);

console.log(result) // 4