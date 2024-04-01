// You are given a 0-indexed, strictly increasing integer array nums 
// and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.


function arithmeticTriplets(nums, diff) {
    const numCounts = new Map();
    const tripletCounts = new Map();
    let count = 0;

    for (const num of nums) {
        const prevNum = num - diff;
        const prevCount = numCounts.get(prevNum) || 0;
        count += tripletCounts.get(prevNum) || 0;
        numCounts.set(num, (numCounts.get(num) || 0) + 1);
        tripletCounts.set(num, (tripletCounts.get(num) || 0) + prevCount);
    }

    return count;
}
