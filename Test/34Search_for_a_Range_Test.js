var searchRange = require('../Src/34Search_for_a_Range').searchRange;
var assert = require('assert');

/**
 * @param {array} val1
 * @param {array} val2
 * @return {boolean}
 */
var ArrEqual = function (val1, val2) {
    if(val1[0] === val2[0] && val1[1] === val2[1]) {
        return true;
    }

    return false;
};

var Test = function (cb) {
    var case1 = [1];
    var case2 = [5, 7, 7, 8, 8, 10];

    assert.equal(ArrEqual(cb(case1, 0), [-1,-1]), true,
            'Test Case 1 Error!');
    assert.equal(ArrEqual(cb(case2, 8), [3, 4]), true,
            'Test Case 1 Error!');
};

console.log('++ node ./Test/34Search_for_a_Range_Test.js');
Test(searchRange);
