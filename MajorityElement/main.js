// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.



function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}


console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2
