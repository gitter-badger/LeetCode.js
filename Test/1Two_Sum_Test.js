var two_sum = require('../Src/1Two_Sum').twoSum;

var Test = function (cb) {
    var case1 = [1, 2, 3, 4, 5];

    var reulst = cb(case1, 9);
    if(reulst[0] !== 4 && reulst[1] !== 5) {
        console.log('Test Error!');
    }
};

Test(two_sum);
