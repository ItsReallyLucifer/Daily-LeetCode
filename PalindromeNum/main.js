// Given an integer 'x', return true if x is a palindrome and false otherwise.


function isPalindrome (x) {
    const str = x.toString();
    const reversedWord = str.split('').reverse().join('')
    if(reversedWord === str){
        return true
    }else{
        return false
    }
};

console.log(isPalindrome(121)) // true
console.log(isPalindrome(567)) // false