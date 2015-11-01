var two_sum = require('../Src/1Two_Sum').twoSum1;

var Test = function (cb) {
    var case1 = [1, 2, 3, 4, 5];
    var case2 = [4, 6, 8, 9, 0];
    var case3 = [1, 20, 21, 5, 9];

    if(cb(case1, 9)[0] !== 4 && cb(case1, 9)[1] !== 5) {
        console.log('Test1 Error!');
    }
    if(cb(case2, 17)[0] !== 3 && cb(case2, 9)[1] !== 4) {
        console.log('Test2 Error');
    }
    if(cb(case3, 10)[0] !== 1 && cb(case3, 10)[1] !== 5) {
        console.log('Test3 Error');
    }
};

var start = new Date().getTime();
Test(two_sum);
var end = new Date().getTime();
console.log(end - start);
