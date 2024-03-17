// Given a sentence s​​​​​​ and an integer k​​​​​​. Truncate s​​​​​​ such that it contains only the first k​​​​​​ words. 
// Return s​​​​​​ after truncating it.



function truncateSentence(s: string, k: number): string {
    const words: string[] = s.split(' ');
    return words.slice(0, k).join(' ');
}

// Example usage:
const sentence: string = "Hello how are you Contestant";
const k: number = 4;
console.log(truncateSentence(sentence, k)); // Output: "Hello how are you"
