var mSW = require('../Src/239Sliding_Window_Maximum').maxSlidingWindow;
var assert = require('assert');

/**
 * @param {array} val1
 * @param {array} val2
 * @return {boolean}
 */
var ArrEqual = function (val1, val2) {
    var len1 = val1.length,
        len2 = val2.length;
    if(len1 !== len2) {
        return false;
    }
    for(var i = 0; i < len1; i++) {
        if(val1[i] !== val2[i]) {
            return false;
        }
    }

    return true;
};

var Test = function (cb) {
    var case1 = [],
        result1 = [];
    var case2 = [1, 3, -1, -3, 5, 3, 6, 7],
        result2 = [3, 3, 5, 5, 6, 7];
    var case3 = [7,2,4],
        result3 = [7, 4];

    assert.equal(ArrEqual(cb(case1, 0), result1), true,
            'Test Case 1 Error!');
    assert.equal(ArrEqual(cb(case2, 3), result2), true,
            'Test Case 2 Error!');
    assert.equal(ArrEqual(cb(case3, 2), result3), true,
            'Test Case 3 Error!');
}

console.log('++ node ./Test/239Sliding_Window_Maximum_Test.js');
Test(mSW);
