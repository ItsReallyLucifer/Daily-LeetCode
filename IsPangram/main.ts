// Given a string sentence containing only lowercase English letters, 
//return true if sentence is a pangram, or false otherwise.
// A pangram is a sentence where every letter of the English alphabet appears at least once.




function checkIfPangram(sentence: string): boolean {
    return new Set(sentence.split("")).size === 26;
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
console.log(checkIfPangram("hello")); // false
