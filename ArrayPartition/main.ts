// Given an integer array nums of 2n integers, group these integers into n pairs
// (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) 
// for all i is maximized. Return the maximized sum.




function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
  
    let sum: number = 0;
    for (let i: number = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
  
    return sum;
}

const nums: number[] = [1, 4, 3, 2];
const result: number = arrayPairSum(nums);
console.log(result); // 4
