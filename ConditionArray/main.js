// You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:
// The 2D array should contain only the elements of the array nums.
// Each row in the 2D array contains distinct integers.
// The number of rows in the 2D array should be minimal.
// Return the resulting array. If there are multiple answers, return any of them.
// Note that the 2D array can have a different number of elements on each row.


function findMatrix(nums) {

    const result = [];
    
    for (let num of nums) {
        let found = false;
        
        for (let row of result) {
            if (!row.includes(num)) {
                row.push(num);
                found = true;
                break;
            }
        }

        if (!found) {
            result.push([num]);
        }
    }
    return result;
}

const nums = [1, 2, 3, 4, 5, 1, 2, 6];
console.log(findMatrix(nums)); // [ [ 1, 2, 3, 4, 5, 6 ], [ 1, 2 ] ]
