// Given a string s consisting of lowercase English letters, return the first letter to appear twice.
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.




function repeatedCharacter(s) {
    const seenChars = new Set();

    for (let i = 0; i < s.length; i++) {
        if (seenChars.has(s[i])) {
            return s[i];
        } else {
            seenChars.add(s[i]);
        }
    }
}


console.log(repeatedCharacter('abccbaacz'))  // c
