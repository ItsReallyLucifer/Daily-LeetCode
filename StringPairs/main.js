// You are given a 0-indexed array words consisting of distinct strings.
// The string words[i] can be paired with the string words[j] if:
// The string words[i] is equal to the reversed string of words[j].
// 0 <= i < j < words.length.
// Return the maximum number of pairs that can be formed from the array words.
// Note that each string can belong in at most one pair.



function maximumNumberOfStringPairs(words) {
    const reversedSet = new Set();
    let pairsCount = 0;

    for (const word of words) {
        const reversedWord = word.split('').reverse().join('');
        if (reversedSet.has(reversedWord)) {
            pairsCount++;
            reversedSet.delete(reversedWord); 
        } else {
            reversedSet.add(word);
        }
    }

    return pairsCount;
}

const words = ["abcd", "dcba", "lls", "s", "sssll"];
console.log(maximumNumberOfStringPairs(words)); // 5
