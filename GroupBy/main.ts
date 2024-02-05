// Write a program that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
// Please solve it without lodash's _.groupBy function.



// arrayExtensions.ts
declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): { [key: string]: T[] };
    }
}

if (!Array.prototype.groupBy) {
    Array.prototype.groupBy = function<T>(fn: (item: T) => string): { [key: string]: T[] } {
        return this.reduce((acc: { [key: string]: T[] }, item: T) => {
            const key = fn(item);
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(item);
            return acc;
        }, {});
    };
}

// main.ts
import "./arrayExtensions";

const arr: number[] = [1, 2, 3, 4, 5];
const grouped = arr.groupBy((item) => (item % 2 === 0 ? "even" : "odd"));

console.log(grouped);
// { odd: [1, 3, 5], even: [2, 4] }


