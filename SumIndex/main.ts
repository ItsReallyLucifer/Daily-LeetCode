// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order./
//Example 1:

//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


function twoSum(arr: number[], target: number): [number, number] | null {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[i] + arr[k] === target && i !== k) {
                return [i, k];
            }
        }
    }
    return null; // Return null if no such pair is found
}

console.log(twoSum([1, 2, 3, 4, 5], 9)); // [3, 4]
console.log(twoSum([1, 2, 3, 4, 5], 4)); // [0, 2]
