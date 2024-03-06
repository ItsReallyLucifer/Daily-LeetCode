// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]




function runningSum(nums: number[]): number[] {
    let runningSum: number = 0;
    return nums.map((num: number) => runningSum += num);
}

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
console.log(runningSum([5, 8, 13, 16])); // [5,13,26,42]
