/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverN = 0, lastDigit = 0;
    while (x!==0) {
        lastDigit = x % 10;
        x = parseInt(x/10);
        reverN = reverN * 10 + lastDigit;
        if (reverN < Math.pow(-2, 31) || reverN > Math.pow(2, 31) - 1) return 0
    }
    return reverN
};
