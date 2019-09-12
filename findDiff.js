/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var a, i, flag = 0;

    s = s.split("").sort();
    t = t.split("").sort();

    for(i = 0; i < t.length && flag == 0; i++){
        if(s[i] != t[i]){ 
            a = t[i]; 
            flag = 1;
        }
    }
    return a;
};
