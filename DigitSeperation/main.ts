// Given an array of positive integers nums, return an array answer that consists -
// of the digits of each integer in nums after separating them in the same order they appear in nums.
// To separate the digits of an integer is to get all the digits it has in the same order.



function separateDigits(nums: number[]): number[] {
    const answer: number[] = [];
    for (const num of nums) {
        const digits: number[] = Array.from(String(num), Number);
        answer.push(...digits);
    }
    return answer;
}

const numsArr: number[] = [10562, 158, 27];

console.log(separateDigits(numsArr)); // [1, 0, 5, 6, 2, 1, 5, 8, 2, 7]
