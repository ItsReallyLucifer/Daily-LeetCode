// Given an integer array nums of size n, return the number with the value closest to 0 in nums. 
//If there are multiple answers, return the number with the largest value.




function findClosestNumber(nums) {
    let closest = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i]) < Math.abs(closest) || (Math.abs(nums[i]) === Math.abs(closest) && nums[i] > closest)) {
            closest = nums[i];
        }
    }

    return closest;
}


const numbers = [2,-10,19,-27,5]

console.log(findClosestNumber(numbers)) // 2