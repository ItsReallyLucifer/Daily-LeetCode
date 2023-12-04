// You are given a 0-indexed array of strings words and a character x.
// Return an array of indices representing the words that contain the character x.
// Note that the returned array may be in any order.




function findWordsContaining(words, x) {
    const indices = [];
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            indices.push(i);
        }
    }
    
    return indices;
}

const words = ["leet", "code"];
const x = "e";

console.log(findWordsContaining(words,x));   // [0, 1]

