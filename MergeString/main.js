// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
// starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.



function mergeAlternately(word1, word2) {
    let merged = '';
    let i = 0;
    let j = 0;

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            merged += word1[i];
            i++;
        }
        
        if (j < word2.length) {
            merged += word2[j];
            j++;
        }
    }

    return merged;
}

const word1 = "abc";
const word2 = "pqr";
const result = mergeAlternately(word1, word2);
console.log(result); // "apbqcr"
