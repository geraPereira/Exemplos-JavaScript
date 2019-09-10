/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i, j = 0, r = 0, n, c = 0;

    if(digits[0] == 9){
        r = 1;
    }

    if(digits[digits.length - 1] == 9){
        c++;
        digits[digits.length - 1] = 0;
        for(i = digits.length - 2; i >= 0 && c != 0; i--){
            if(digits[i] == 9){
                digits[i] += c;
                digits[i] %= 10;
            }
            else {
                digits[i] += 1;
                digits[i] %= 10;
                c--;
            }
        }
    }
    else digits[digits.length - 1] += 1;

    if(digits[0] == 0 && r == 1){

        digits.unshift(1);
    }

    return digits;
};
