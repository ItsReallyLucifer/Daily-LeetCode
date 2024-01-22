// Write a program that enhances all arrays such that you can call the array.last() method on any array 
// and it will return the last element. If there are no elements in the array, it should return -1.
// You may assume the array is the output of JSON.parse.



interface Array<T> {
    last(): T | number;
}

Array.prototype.last = function<T>() {
    if (this.length === 0) {
        return -1;
    } else {
        return this[this.length - 1] as T | number;
    }
};

let nums: (number | null | {})[] = [null, {}, 3];
nums = JSON.parse(JSON.stringify(nums)) as (number | null | {})[];
console.log(nums.last()); // 3
