var CD = require('../Src/217Contains_Duplicate').containsDuplicate;
var assert = require('assert');

var Test = function(cb) {
    var case1 = [];
    var case2 = [3, 3];
    var case3 = [ , , ];
    var case4 = [1, 2];
    var case5 = [,];

    assert.equal(cb(case1), false, 'Test case 1 error!');
    assert.equal(cb(case2), true, 'Test case 2 error!');
    assert.equal(cb(case3), true, 'Test case 3 error!');
    assert.equal(cb(case4), false, 'Test case 4 error!');
    assert.equal(cb(case5), false, 'Test case 5 error!');
};

console.log('++ node ./Test/217Contains_Duplicate_Test.js');
Test(CD);
