// Given an integer array of nums, return 'true' if any value appears atleast twice in the array,
// and return 'false' if every element is distinct.
// Example: input nums = [1,2,3,1] = true
// Example: input nums = [1,2,3,4] = false


function containsDuplicate(nums: number[]): boolean {
    if (new Set(nums).size !== nums.length) {
        return true;
    } else {
        return false;
    }
}

console.log(containsDuplicate([1, 2, 3, 4, 5, 5])); // true
console.log(containsDuplicate([1, 2, 3, 4, 5])); // false
