/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var n = 0, achou = 0;
    s = s.split(" ");
    for(i = s.length - 1; i >= 0 && achou == 0; i--){
        if(s[i] != ""){
            achou = 1;
            n = s[i].length;
        }
    }

    return n;
};
