// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, return the Hamming distance between them.



function hammingDistance(x: number, y: number): number {
    let xorResult: number = x ^ y;
    let distance: number = 0;

    while (xorResult > 0) {
        distance += xorResult & 1;
        xorResult >>= 1;
    }

    return distance;
}

console.log(hammingDistance(1, 4)); // 2
console.log(hammingDistance(3, 1)); // 1
