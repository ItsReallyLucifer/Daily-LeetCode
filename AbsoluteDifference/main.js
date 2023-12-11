// You are given a positive integer array nums.
// The Element sum is the sum of all the elements in nums.
// The Digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.
// Note that the absolute difference between two integers x and y is defined as |x - y|.



function differenceOfSum(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const digits = String(nums[i]);
        for (let j = 0; j < digits.length; j++) {
            digitSum += parseInt(digits[j]);
        }
        elementSum += nums[i];
    }

    return Math.abs(elementSum - digitSum);
}

console.log(differenceOfSum([1,15,6,3])) // 9