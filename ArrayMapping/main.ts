// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.



function map<T, U>(arr: T[], fn: (item: T, index: number) => U): U[] {
    const mappedArray: U[] = [];
    
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(fn(arr[i], i));
    }
    
    return mappedArray;
}

const arr: number[] = [1, 2, 3];
const plusOne: (n: number) => number = function plusOne(n: number): number {
    return n + 1;
};

const newArray: number[] = map(arr, plusOne);
console.log(newArray); // [2, 3, 4]
