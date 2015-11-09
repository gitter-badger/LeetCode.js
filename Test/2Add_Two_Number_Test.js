var Add_two_number = require('../Src/2Add_Two_Numbers').addTwoNumbers;
var assert = require('assert');

/**
 * @desc assert two ListNode obj equal or not
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {bool}
 */
function isEqual(val1, val2) {
    var bool = true;
    while(val1 !== null && val2 !== null) {
        if(val1.val !== val2.val) {
            bool = false;
            break;
        }
        val1 = val1.next;
        val2 = val2.next;
    }

    return bool;
}

var Test = function (cb) {
    var case1 = {
        value1: { val: 2,
            next: { val: 4, next: { val: 3, next: null }}},
        value2: { val: 5,
            next: { val: 6, next: { val: 4, next: null }}}
    };
    var result =  { val: 7,
            next: { val: 0, next: { val: 8, next: null}}
    };
    assert.equal(isEqual(cb(case1.value1, case1.value2), result), true,
            'Test Error!');

};

console.log('++ node ./Test/2Add_Two_Number_Test.js');
Test(Add_two_number);
