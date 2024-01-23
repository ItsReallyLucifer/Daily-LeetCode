// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it into some number of substrings such that:
// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.



function balancedStringSplit(s: string): number {
    let count = 0;
    let balancedCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            count++;
        } else if (s[i] === 'R') {
            count--;
        }

        if (count === 0) {
            balancedCount++;
        }
    }

    return balancedCount;
}

console.log(balancedStringSplit('RLRRLLRLRL')); // 4
