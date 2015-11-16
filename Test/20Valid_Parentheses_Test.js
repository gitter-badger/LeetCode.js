var isValid = require('../Src/20Valid_Parentheses').isValid;
var assert = require('assert');

var Test = function (cb) {
    var case1 = '[]{}()',
        case2 = '([])',
        case3 = '{[}]';

    assert.equal(cb(case1), true, 'Test case 1 error!');
    assert.equal(cb(case2), true, 'Test case 2 error!');
    assert.equal(cb(case3), false, 'Test case 3 error!');
};

console.log('++ node ./Test/20Valid_Parentheses_Test.js');
Test(isValid);
