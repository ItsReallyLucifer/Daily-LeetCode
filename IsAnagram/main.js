// Given two strings s and t, return true if t is an anagram of s, 
//and false otherwise.




function isAnagram(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');

}
const s = 'anagram'
const t = 'nagaram'

console.log(isAnagram(s,t)) // true
console.log(isAnagram('hello','goodbye')) // false