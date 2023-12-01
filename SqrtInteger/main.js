// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
// The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.



function mySqrt(x) {
    if (x <= 1) return x;

    let left = 1;
    let right = Math.floor(x / 2);

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let midSquared = mid * mid;

        if (midSquared === x) return mid;
        else if (midSquared < x) left = mid + 1;
        else right = mid - 1;
    }

    return right;
}

console.log(mySqrt(4)); // 2
console.log(mySqrt(15)); // 3

