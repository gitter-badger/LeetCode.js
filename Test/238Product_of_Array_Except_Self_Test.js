var PES = require('../Src/238Product_of_Array_Except_Self').productExceptSelf;
var assert = require('assert');

/**
 * @description assert two array equal
 * @param {number[]} val1
 * @param {number[]} val2
 * @return {bollean}
 */
var isEqual = function (val1, val2) {
    if(val1.length !== val2.length) {
        return false;
    }
    val1.forEach(function (elem, index) {
        if(elem !== val2[index]) {
            return false;
        }
    });

    return true;
};
var Test = function(cb) {
    var case1 = [0, 0];
    var case2 = [1, 0];
    var case3 = [1, 2, 3, 4];

    var result1 = [0, 0];
    var result2 = [0, 1];
    var result3 = [24, 12, 8, 6];

    assert.equal(isEqual(cb(case1), result1), true, 'Test Case 1 Error!');
    assert.equal(isEqual(cb(case2), result2), true, 'Test Case 2 Error!');
    assert.equal(isEqual(cb(case3), result3), true, 'Test Case 2 Error!');

};

console.log('++ node ./Test/238Product_of_Array_Except_Self_Test.js');
Test(PES);
