// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.



function findGCD(nums: number[]): number {
    const min: number = Math.min(...nums);
    const max: number = Math.max(...nums);

    const gcd = (a: number, b: number): number => {
        while (b !== 0) {
            let temp: number = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    return gcd(min, max);
}

const nums: number[] = [18, 24, 36];
const result: number = findGCD(nums);
console.log(result); // 18
