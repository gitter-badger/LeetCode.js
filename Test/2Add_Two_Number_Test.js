var Add_two_number = require('../Src/2Add_Two_Numbers').addTwoNumbers;
var assert = require('assert');
var isEqual = require('../lib/fun').nodeIsEqual;

var Test = function (cb) {
    var case1 = {
        value1: { val: 2,
            next: { val: 4, next: { val: 3, next: null }}},
        value2: { val: 5,
            next: { val: 6, next: { val: 4, next: null }}}
    };
    var result1 =  { val: 7,
            next: { val: 0, next: { val: 8, next: null}}
    };

    var case2 = {
        value1: { val: 0,
            next: null },
        value2: { val: 5,
            next: null }
    };
    var result2 =  { val: 5,
            next: null
    };

    var case3 = {
        value1: { val: 1,
            next: null },
        value2: { val: 9,
            next: { val: 9, next: null }}
    };
    var result3 =  { val: 0,
            next: { val: 0, next: { val: 1, next: null}}
    };

    assert.equal(isEqual(cb(case1.value1, case1.value2), result1), true,
            'Test case 1 Error');

    assert.equal(isEqual(cb(case2.value1, case2.value2), result2), true,
            'Test case 2 Error!');

    assert.equal(isEqual(cb(case3.value1, case3.value2), result3), true,
            'Test case 3 Error!');
};

console.log('++ node ./Test/2Add_Two_Number_Test.js');
Test(Add_two_number);
