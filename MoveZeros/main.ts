// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]



function moveZeroes(nums: number[]): number[] {
    let left: number = 0;
    let right: number = 0;

    while (right < nums.length) {
        if (nums[right] !== 0) {
            let temp: number = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
        right++;
    }
    return nums;
}

let nums: number[] = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums)); // [1, 3, 12, 0, 0]
