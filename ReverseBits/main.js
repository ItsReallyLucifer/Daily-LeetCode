// Reverse bits of a given 32 bits unsigned integer.
// Note that in some languages, such as Java, there is no unsigned integer type. 
// In this case, both input and output will be given as a signed integer type. 
// They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.



function reverseBits(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result >>> 0; 
}

const input = 0b00000010100101000001111010011100;
console.log(reverseBits(input)); // 964176192
