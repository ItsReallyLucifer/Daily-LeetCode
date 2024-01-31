// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps





function climbStairs(n: number): number {
    if (n < 2) {
        return 1;
    }
    let firstStep: number = 1;
    let secondStep: number = 1;
    let thirdStep: number = 0;

    for (let i: number = 2; i <= n; i++) {
        thirdStep = firstStep + secondStep;
        firstStep = secondStep;
        secondStep = thirdStep;
    }
    return thirdStep;
}

const n: number = 2;
console.log(climbStairs(n)); // 2
