// Given an array arr and a function fn, return a sorted array sortedArr. 
// You can assume fn only returns numbers and those numbers determine the sort order of sortedArr.
// sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.


function sortBy<T>(arr: T[], fn: (item: T) => number): T[] {
    return arr.slice().sort((a, b) => fn(a) - fn(b));
}

const arr: number[] = [5, 4, 1, 2, 3];
const sortedArr: number[] = sortBy(arr, (x) => x);
console.log(sortedArr); // [1, 2, 3, 4, 5]
