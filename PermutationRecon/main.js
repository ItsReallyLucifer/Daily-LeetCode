// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.



function diStringMatch(s) {
    let n = s.length;
    let low = 0, high = n;
    let result = [];
    
    for (let i = 0; i <= n; i++) {
        if (s[i] === 'I') {
            result.push(low);
            low++;
        } else {
            result.push(high);
            high--;
        }
    }
    
    return result;
}

const s = "IDID";
console.log(diStringMatch(s));