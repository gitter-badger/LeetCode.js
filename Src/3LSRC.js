/**
 * Given a string, find the length of the longest substring
 * without repeating characters.
 * For example, the longest substring without repeating letters
 * for "abcabcbb" is "abc", which the length is 3.
 * For "bbbbb" the longest substring is "b", with the length of 1.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var Char = [];
    var count = 0;
    var flag = 0;
    var i, j;
    var len = s.length;
    for(i = 0; i < len; i++) {
        for(j = i; j < len; j++) {
            if(Char[s[i]] !== 1) {
                flag += 1;
                Char[s[i]] = 1;
            }
            else {
                if(flag > count) {
                    count = flag;
                }
                flag = 0;
                Char = [];
            }
        }
    }
    return count;
};

exports.LLS = lengthOfLongestSubstring;
