// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.


function lengthOfLastWord(s) {
    const trimmed = s.trim();

    let length = 0;
    for (let i = trimmed.length - 1; i >= 0; i--) {
        if (trimmed[i] !== ' ') {
            length++;
        } else {
            break;
        }
    }

    return length;
}

const inputString = "Hello World";
console.log(lengthOfLastWord(inputString)); // 5 ('World' = 5)