// You are given a string allowed consisting of distinct characters and an array of strings words.
// A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.




function countConsistentStrings(allowed, words) {
    const allowedSet = new Set(allowed);
    let count = 0;
    
    for (const word of words) {
        let consistent = true;
        for (const char of word) {
            if (!allowedSet.has(char)) {
                consistent = false;
                break;
            }
        }
        if (consistent) {
            count++;
        }
    }
    
    return count;
}

const allowed = "ab";
const words = ["ad","bd","aaab","baa","badab"];

console.log(countConsistentStrings(allowed, words)); // 2
