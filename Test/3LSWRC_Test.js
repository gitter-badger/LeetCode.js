var LLS = require('../Src/3Longest_Substring_Without_Repeating_Characters').LLS;
var assert = require('assert');

var Test = function (cb) {
    var case1 = 'abcabcbb';
    var case2 = 'aaaaaa';
    var case3 = 'param';

    assert.equal(cb(case1), 3, 'Case 1:  Test Error! Length:' + cb(case1) +
                    ' Execpt Lenth: 3');

    assert.equal(cb(case2), 1, 'Case 2:  Test Error! Length:' + cb(case2) +
                    ' Execpt Lenth: 1');

    assert.equal(cb(case3), 3, 'Case 3:  Test Error! Length:' + cb(case3) +
                    ' Execpt Lenth: 3');
};

console.log('++ node ./Test/3Longest_Substring_Without_Repeating_Characters_Test.js');
Test(LLS);
