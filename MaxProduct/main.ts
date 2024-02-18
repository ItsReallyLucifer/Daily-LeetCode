// Given the array of integers nums, you will choose two different indices i and j of that array.
//  Return the maximum value of (nums[i]-1)*(nums[j]-1).




function maxProduct(nums: number[]): number {
    let max1: number = -Infinity;
    let max2: number = -Infinity;

    for (let num of nums) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    return (max1 - 1) * (max2 - 1);
}

const nums: number[] = [3, 4, 5, 2];
const result: number = maxProduct(nums);
console.log(result); // 12
