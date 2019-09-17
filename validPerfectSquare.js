/**
 * @param {number} num
 * @return {boolean}
 */

var isPerfectSquare = function(num) {
    
    var i, flag = false;
    
    if (num != 1){
        for (i = 2; i*i <= num && flag == false; i++){
            if ((i)*(i) == num){
                flag = true;
            }
        }  
    }
    else flag = true;

    return flag;
};
