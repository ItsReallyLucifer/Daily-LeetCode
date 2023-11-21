// You are given a string 's' and an integer array 'indices' of the same length. 
// The string 's' will be shuffled such that the character at the i(th) position 
// moves to indices[i] in the shuffled string.
// Return the shuffled string.

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"


function restoreString(s, indices) {
    const shuffled = [];
    for (let i = 0; i < indices.length; i++) {
        shuffled[indices[i]] = s[i];
    }
    return shuffled.join('');
}

const s = "codeleet";
const indices = [4, 5, 6, 7, 0, 2, 1, 3];
console.log(restoreString(s, indices)); // "leetcode"
