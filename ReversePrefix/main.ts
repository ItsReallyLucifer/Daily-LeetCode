// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.
// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".



function reversePrefix(word: string, ch: string): string {
    const index: number = word.indexOf(ch);
    if (index === -1) return word; 
    return word.slice(0, index + 1).split('').reverse().join('') + word.slice(index + 1);
}

const word: string = "abcdefd";
const ch: string = "d";
console.log(reversePrefix(word, ch)); // Output: "dcbaefd"
