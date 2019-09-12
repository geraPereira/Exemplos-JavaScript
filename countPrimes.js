/**
 * @param {number} n
 * @return {number}
 */

var isPrime = function(num){
    var i, flag = 0, p = true;
    for(i = 2; i <= Math.sqrt(num) && flag == 0; i++){
        if(num%i == 0) flag = 1;
    }
    if(flag == 1) p = false;
    
    return p;
}
var countPrimes = function(n) {
    var i, ct = 0;

    for (i = n; i >= 2; i--){
        if(isPrime(i) == true) ct++;
    }
    return ct;
};
