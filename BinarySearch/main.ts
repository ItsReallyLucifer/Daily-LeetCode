// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums.
// If target exists, return its index.
// Otherwise, return -1.



function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (nums[mid] === target) {
            return mid; 
        } else if (nums[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return -1;
}

const nums: number[] = [-1, 0, 3, 5, 9, 12];
const target: number = 9;
console.log(search(nums, target)); // 4
