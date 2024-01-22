// You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:
// pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
// Note that ^ denotes the bitwise-xor operation.
// It can be proven that the answer is unique.


function findArray(pref: number[]): number[] {
    const n: number = pref.length;
    let arr: number[] = [pref[0]];

    for (let i: number = 1; i < n; i++) {
        arr.push(pref[i - 1] ^ pref[i]);
    }

    return arr;
}

const prefArray: number[] = [5, 2, 0, 3, 1];
console.log(findArray(prefArray)); // [5, 7, 2, 3, 2]
