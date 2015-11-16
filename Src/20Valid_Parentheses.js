/**
 * Given a string containing just the characters '(', ')', '{', '}'
 * and '[' and ']', determine if the input string is valid.
 *
 * The brackets must close in the correct order, "()" and "()[]{}"
 * are all valid but "(]" and "([)]" are not.
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var index = 0;
    var p = {'(': 0, '[': 0, '{': 0 };
    var len = s.length;
    var flag = [];

    while(index < len) {
        switch (s[index]) {
            case '(': p['(']++; flag.push(')');
                break;
            case '[': p['[']++; flag.push(']');
                break;
            case '{': p['{']++; flag.push('}');
                break;
            case ')':
                if(p['('] === 0 || flag[flag.length-1] !== ')') {
                    return false;
                }
                p['(']--;
                flag.pop();
                break;
            case ']':
                if(p['['] === 0 || flag[flag.length-1] !== ']') {
                    return false;
                }
                p['[']--;
                flag.pop();
                break;
            case '}':
                if(p['{'] === 0 || flag[flag.length-1] !== '}') {
                    return false;
                }
                p['{']--;
                flag.pop();
        }
        index++;
    }
    if(p['('] === 0 && p['['] === 0 && p['{'] === 0) {
        return true;
    }
    return false;
};

exports.isValid = isValid;
