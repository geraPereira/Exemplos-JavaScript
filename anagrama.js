/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var r = false;

    if(s.split('').sort().join() === t.split('').sort().join()) r = true

    return r;
};
