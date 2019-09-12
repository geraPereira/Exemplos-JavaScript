/**
 * @param {number} num
 * @return {boolean}
 */

var isUgly = function(num) {
    var u = false;
    if (num <= 0) u = false;
    else if(num < 5) u = true;
    else{
        while(num % 2 == 0){
            num /= 2; 
        }
        while(num % 3 == 0){
            num /= 3; 
        }
        while(num % 5 == 0){
            num /= 5; 
        }
        if(num == 1) u = true;
    }

    
    
    return u;
};
