// You are given an integer array nums. 
// The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.


function sumOfUnique(nums) {
    const numCount = new Map();
    let sum = 0;

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

const nums = [1, 2, 3, 2, 5, 6, 3, 5];
const result = sumOfUnique(nums);
console.log(result); // 7
