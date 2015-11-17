var LOLW = require('../Src/58Length_of_Last_Word').lengthOfLastWord;
var assert = require('assert');

var Test = function (cb) {
    var case1 = 'a';
    var case2 = 'asd  asd aas';
    var case3 = '';
    assert.equal(cb(case1), 1, 'Test case 1 Error');

    assert.equal(cb(case2), 3, 'Test case 2 Error');

    assert.equal(cb(case3), 0, 'Test case 3 Error');
};

console.log('++ node ./Test/58Length_of_Last_Word_Test.js');
Test(LOLW);
