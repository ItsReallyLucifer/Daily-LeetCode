// You are given an integer array nums. 
// The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.



function sumOfUnique(nums: number[]): number {
    const numCount: Map<number, number> = new Map();
    let sum: number = 0;

    for (let num of nums) {
        numCount.set(num, (numCount.get(num) || 0) + 1);
    }
    for (let [num, count] of numCount) {
        if (count === 1) {
            sum += num;
        }
    }

    return sum;
}

// Example usage:
const nums: number[] = [1, 2, 3, 2, 5, 6, 3, 5];
const result: number = sumOfUnique(nums);
console.log(result); // Output: 7
