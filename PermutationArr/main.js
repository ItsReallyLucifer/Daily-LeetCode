// Given a zero-based permutation nums (0-indexed), 
//build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).




function buildArray(nums) {
    const n = nums.length;
    const ans = [];

    for (let i = 0; i < n; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
}

const nums = [0, 2, 1, 5, 3, 4];
console.log(buildArray(nums)); // [ 0, 1, 2, 4, 5, 3 ]
