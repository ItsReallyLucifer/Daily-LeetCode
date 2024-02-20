// Given an array nums containing 'n' distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.


function missingNumber(nums: number[]): number {
    const expectedSum: number = (nums.length * (nums.length + 1)) / 2;
    const actualSum: number = nums.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 4, 1, 2, 3, 6])); // 5
