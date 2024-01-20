// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.


function filter<T>(arr: T[], fn: (item: T, index: number) => boolean): T[] {
    const filteredArr: T[] = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
}

// Filtering function (checks if num is greater than 5)
function isGreaterThanFive(num: number): boolean {
    return num > 5;
}

const arr: number[] = [2, 8, 4, 10, 3, 6];
const filteredResult: number[] = filter(arr, isGreaterThanFive);

console.log(filteredResult); // [8, 10, 6]

