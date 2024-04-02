// You are given a 0-indexed, strictly increasing integer array nums 
// and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.


function arithmeticTriplets(nums: number[], diff: number): number {
    const numCounts: Map<number, number> = new Map();
    const tripletCounts: Map<number, number> = new Map();
    let count: number = 0;

    for (const num of nums) {
        const prevNum: number = num - diff;
        const prevCount: number = numCounts.get(prevNum) || 0;
        count += tripletCounts.get(prevNum) || 0;
        numCounts.set(num, (numCounts.get(num) || 0) + 1);
        tripletCounts.set(num, (tripletCounts.get(num) || 0) + prevCount);
    }

    return count;
}
