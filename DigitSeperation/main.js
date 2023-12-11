// Given an array of positive integers nums, return an array answer that consists -
// of the digits of each integer in nums after separating them in the same order they appear in nums.
// To separate the digits of an integer is to get all the digits it has in the same order.




function separateDigits(nums) {
    const answer = [];
    for (const num of nums) {
        const digits = Array.from(String(num), Number);
        answer.push(...digits);
    }
    return answer;
}

const numsArr = [10562, 158, 27]

console.log(separateDigits(numsArr)) // [1056215827]