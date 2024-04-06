// You are given a string allowed consisting of distinct characters and an array of strings words.
// A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.



function countConsistentStrings(allowed: string, words: string[]): number {
    const allowedSet: Set<string> = new Set(allowed);
    let count: number = 0;
    
    for (const word of words) {
        let consistent: boolean = true;
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

const allowed: string = "ab";
const words: string[] = ["ad", "bd", "aaab", "baa", "badab"];

console.log(countConsistentStrings(allowed, words)); // 2
