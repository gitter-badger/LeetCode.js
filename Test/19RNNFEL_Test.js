var assert = require('assert');
var removeNthFromEnd = require('../Src/19RNNFEL').removeNthFromEnd;

/**
 * @description assert two ListNode obj equal or not
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
                next: { val: 4, next: { val: 3, next: { val: 9, next: null }}}},
            value2: { val: 5,
                next: { val: 6, next: { val: 4, next: null }}}
        };

    var result =  {
            result1: { val: 2,
                next: { val: 3, next: { val: 9, next: null}}},
            result2: { val: 6,
                next: { val: 4, next: null }
            }
        };

    assert.equal(isEqual(cb(case1.value1, 3), result.result1), true,
            "Test case 2 Error!");

    assert.equal(isEqual(cb(case1.value2, 3), result.result2), true,
            "Test case 2 Error!");

};

console.log('++ node ./Test/19RNNFEL_Test.js');
Test(removeNthFromEnd);
