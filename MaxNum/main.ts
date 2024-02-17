// Given an integer array nums, return the third distinct maximum number in this array. 
// If the third maximum does not exist, return the maximum number.
// Example: Input: nums = [3,2,1] | Output: 1



function thirdMax(nums: number[]): number {
    nums = Array.from(new Set(nums)); 
    nums.sort((a, b) => b - a); 

    if (nums.length < 3) {
        return nums[0]; 
    } else {
        return nums[2]; 
    }
}

console.log(thirdMax([2,3,1])); // 1
console.log(thirdMax([4,7,2,6])); // 4
