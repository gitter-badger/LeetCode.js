var mergeTwoLists = require('../Src/21Merge_Two_Sorted_Lists').mergeTwoLists;
var assert = require('assert');

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
            next: { val: 3, next: { val: 4, next: null }}},
        value2: { val: 4,
            next: { val: 5, next: { val: 6, next: null }}}
    };
    var result1 =  { val: 2,
            next: { val: 3, next: { val: 4,
            next: { val: 4, next: { val: 5,
            next: { val: 6, next: null }}}}}};

    var case2 = {
        value1: { val: 0,
            next: null },
        value2: { val: 5,
            next: null }
    };
    var result2 =  { val: 0,
            next: { val: 5, next: null }};

    var case3 = {
        value1: null,
        value2: { val: 9,
            next: null}
    };
    var result3 =  { val: 9,
            next: { val: 0, next: null}
    };

    assert.equal(isEqual(cb(case1.value1, case1.value2), result1), true,
            'Test case 1 Error');

    assert.equal(isEqual(cb(case2.value1, case2.value2), result2), true,
            'Test case 2 Error!');

    assert.equal(isEqual(cb(case3.value1, case3.value2), result3), true,
            'Test case 3 Error!');
};

console.log('++ node ./Test/21Merge_Two_Sorted_Lists_Test.js');
Test(mergeTwoLists);
