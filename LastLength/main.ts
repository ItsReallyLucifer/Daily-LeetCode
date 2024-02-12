// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.




function lengthOfLastWord(s: string): number {
    const trimmed: string = s.trim();

    let length: number = 0;
    for (let i: number = trimmed.length - 1; i >= 0; i--) {
        if (trimmed[i] !== ' ') {
            length++;
        } else {
            break;
        }
    }

    return length;
}

const inputString: string = "Hello World";
console.log(lengthOfLastWord(inputString)); // 5 ('World' = 5)
