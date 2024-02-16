// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.




function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sorted: number[] = [...nums].sort((a, b) => a - b);
    return nums.map((num: number) => sorted.indexOf(num));
}

const nums: number[] = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums)); // [4, 0, 1, 1, 3]
