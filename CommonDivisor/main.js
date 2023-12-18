// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.




function findGCD(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    return gcd(min, max);
}

const nums = [18, 24, 36];
const result = findGCD(nums);
console.log(result); // 18
