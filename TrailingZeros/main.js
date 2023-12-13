// Given a positive integer num represented as a string, 
//return the integer num without trailing zeros as a string.




function removeTrailingZeros(num) {
    let endIndex = num.length - 1;
    while (endIndex >= 0 && num[endIndex] === '0') {
        endIndex--;
    }

    if (endIndex === num.length - 1) {
        return num;
    }
    
    return num.slice(0, endIndex + 1);
}

console.log(removeTrailingZeros('439000')) // 439