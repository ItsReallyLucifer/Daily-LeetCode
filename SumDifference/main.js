// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.




function leftRightDifference(nums) {
    const n = nums.length;
    const leftSum = new Array(n).fill(0);
    const rightSum = new Array(n).fill(0);
  
    // Calculate left sums
    let sum = 0;
    for (let i = 0; i < n; i++) {
      leftSum[i] = sum;
      sum += nums[i];
    }
  
    // Calculate right sums
    sum = 0;
    for (let i = n - 1; i >= 0; i--) {
      rightSum[i] = sum;
      sum += nums[i];
    }
  
    // Calculate absolute differences
    const answer = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      answer[i] = Math.abs(leftSum[i] - rightSum[i]);
    }
  
    return answer;
  }
  

  const nums = [3, 6, 2, 9, -1, 10];
  console.log(leftRightDifference(nums)); // [ 26, 17, 9, 2, 10, 19 ]
