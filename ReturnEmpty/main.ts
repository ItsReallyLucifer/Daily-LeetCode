// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

// Example 1:
// Input: obj = {"x": 5, "y": 42} || false

// Example 2:
// Input: obj = {} || true



function isEmpty(obj: any): boolean {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).length === 0;
    }

    return true;
}

const obj: any = {};
const arr: any[] = [];

console.log(isEmpty(obj)); // true
console.log(isEmpty(arr)); // true

const nonEmptyObj: any = { key: 'value' };
const nonEmptyArr: any[] = [1, 2, 3];

console.log(isEmpty(nonEmptyObj)); // false
console.log(isEmpty(nonEmptyArr)); // false
