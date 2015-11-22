var hammingWeight = require('../Src/191Number_of_1_Bits').hammingWeight;
var assert = require('assert');

var Test = function (cb) {
    assert.equal(cb(11), 3, 'Test Cases 1 Error!');
    assert.equal(cb(2), 1, 'Test Cases 2 Error!');
    assert.equal(cb(3), 2, 'Test Cases 3 Error!');
};

console.log('++ node ./Test/191Number_of_1_Bits_Test.js');
Test(hammingWeight);
