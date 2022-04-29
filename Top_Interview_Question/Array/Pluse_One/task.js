/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = BigInt(digits.join('')) + 1n
    n = String(n).split('')
    n = n.map(el => Number(el))
    return n
};
