// Given a 0-indexed integer array nums of length n and an integer target,
// return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
// Example:
// Input: nums = [-1,1,2,3,1], target = 2
// Output: 3 || There are 3 pairs of indices that satisfy the conditions in the statement



function countPairs(nums: number[], target: number): number {
    let count = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] < target) {
                count++;
            }
        }
    }

    return count;
}

const nums: number[] = [-1, 1, 2, 3, 1];
const target: number = 2;

console.log(countPairs(nums, target)); // 3
