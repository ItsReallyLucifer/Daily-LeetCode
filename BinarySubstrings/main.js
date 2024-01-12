// Given a binary string s, calculate and return the number of non-empty substrings where 
// the consecutive 0's and 1's are grouped together, and the count of 0's and 1's is equal. Count repeated substrings accordingly.



function countBinarySubstrings(s) {
    let count = 0;
    let prevLength = 0;
    let currentLength = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            currentLength++;
        } else {
            count += Math.min(prevLength, currentLength);
            prevLength = currentLength;
            currentLength = 1;
        }
    }

    count += Math.min(prevLength, currentLength);
    return count;
}

const inputString = "00110011";
console.log(countBinarySubstrings(inputString)); // 6
