// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.



function diStringMatch(s: string): number[] {
    const n: number = s.length;
    let low: number = 0;
    let high: number = n;
    const result: number[] = [];
    
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

const s: string = "IDID";
console.log(diStringMatch(s)); 
