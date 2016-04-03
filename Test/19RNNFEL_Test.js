var assert = require('assert');
var removeNthFromEnd = require('../Src/19RNNFEL').removeNthFromEnd;
var isEqual = require('../lib/fun').nodeIsEqual;

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
