/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var i, n = 0;
    
    for(i=0; i < s.length; i++){

        if(s[i] == "M"){
            n += 1000;
        }
        else if(s[i] == "D"){
            n += 500;
        }
        else if(s[i] == "C"){
            if(s[i+1] == "M" || s[i+1] == "D") n -= 100;
            else n += 100;
        }
        else if(s[i] == "L"){
            n += 50;
        }
        else if(s[i] == "X"){
            if(s[i+1] == "L" || s[i+1] == "C") n -= 10;
            else n += 10;
        }
        else if(s[i] == "V"){
            n += 5;
        }
        else if(s[i] == "I"){
            if(s[i+1] == "X" || s[i+1] == "V") n -= 1;
            else n += 1;
        }
    }
    return n;
}
