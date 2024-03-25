// We are given a list nums of integers representing a list compressed with run-length encoding.
// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.
// Return the decompressed list.



function decompressRLElist(nums: number[]): number[] {
    const result: number[] = [];
    
    for (let i = 0; i < nums.length; i += 2) {
        const freq: number = nums[i];
        const val: number = nums[i + 1];
        for (let j = 0; j < freq; j++) {
            result.push(val);
        }
    }
    
    return result;
}

const nums: number[] = [1, 2, 3, 4];
console.log(decompressRLElist(nums)); // [2, 4, 4, 4]
