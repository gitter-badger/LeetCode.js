var two_sum = require('../Src/1Two_Sum').twoSum1;
var assert = require('assert');

var Test = function (cb) {
    var case1 = [1, 2, 3, 4, 5],
        result1 = [4, 5];
    var case2 = [4, 6, 8, 9, 0],
        result2 = [4, 5];
    var case3 = [1, 20, 21, 5, 9],
        result3 = [1, 5];



    assert.equal(cb(case1, 9).toString(), result1.toString(),
                'Test case 1 Error');

    assert.equal(cb(case2, 9).toString(), result2.toString(),
                'Test case 2 Error');

    assert.equal(cb(case3, 10).toString(), result3.toString(),
                'Test case 3 Error');
};

Test(two_sum);
