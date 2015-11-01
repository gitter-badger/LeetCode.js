var two_sum = require('../Src/1Two_Sum').twoSum;

var Test = function (cb) {
    var case1 = [1, 2, 3, 4, 5];
    var case2 = [4, 6, 8, 9, 0];

    if(cb(case1, 9)[0] !== 4 && cb(case1, 9)[1] !== 5) {
        console.log('Test Error!');
    }
    if(cb(case2, 17)[0] !== 3 && cb(case1, 9)[1] !== 4) {
        console.log('Test Error');
    }
};

Test(two_sum);
