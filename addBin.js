/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const num1 = BigInt('0b' + a, 2); 
    const num2 = BigInt('0b' + b, 2);
    return (num1 + num2).toString(2);
};
