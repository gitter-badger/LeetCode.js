var reverse = require('../Src/7Reverse_Integer').reverse;
var assert = require('assert');

var Test = function (cb) {
    var case1 = -123;
    var case2 = 1534236469;
    var case3 = 3456;

    assert.equal(cb(case1), -321,
            'Test case 1 Error!');
    assert.equal(cb(case2), 0,
            'Test case 2 Error!');
    assert.equal(cb(case3), 6543,
            'Test case 3 Error!');
};

console.log('++ node ./Test/7Reverse_Integer_Test.js');
Test(reverse);
