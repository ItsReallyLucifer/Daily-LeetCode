// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
// Please solve it without using lodash's _.chunk function.




function chunk(arr: any[], size: number): any[][] {
    const chunked: any[][] = [];
    let index = 0;

    while (index < arr.length) {
        chunked.push(arr.slice(index, index + size));
        index += size;
    }

    return chunked;
}

const arr: number[] = [1, 2, 3, 4, 5];
const size: number = 1;
const result: number[][] = chunk(arr, size);
console.log(result); // [ [1], [2], [3], [4], [5] ]
