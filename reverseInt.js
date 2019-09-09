//Problema retirado de https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    var a;
    if (x >= (2**31-1) || x <= -(2**31)) a = 0;
    else{
        if(x < 0){
            a = parseInt(x.toString().split("").reverse().join(""));
            a -= 2*a;
        }
        else 
            a = parseInt(x.toString().split("").reverse().join(""));
            //converte para string -> separa string -> inverte array -> une array em string
    }
    return a;
};
