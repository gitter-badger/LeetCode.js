/*
 * Reverse digits of an integer.
 *
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 */

/*
 * Here are some good questions to ask before coding.
 * Bonus points for you if you have already thought through this!
 *
 * If the integer's last digit is 0,
 * what should the output be? ie, cases such as 10, 100.
 *
 * Did you notice that the reversed integer might overflow?
 * Assume the input is a 32-bit integer,
 * then the reverse of 1000000003 overflows. How should you handle such cases?
 *
 * For the purpose of this problem,
 * assume that your function returns 0 when the reversed integer overflows.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x.toString();
    var len = x.length;
    var result = '';
    if(x >= Math.pow(2, 31) || x < -Math.pow(2, 31)) {
        return 0;
    }
    if(x[0] === '-') {
        result += x[0];
    }
    for(var i = len-1; i >= 0; i--) {
        if(x[i] === '-') {
            continue;
        }
        result += x[i];
    }
    result = parseInt(result);
    if(result >= Math.pow(2, 31) || result < -Math.pow(2, 31)) {
        return 0;
    }
    return result;
};


exports.reverse = reverse;
