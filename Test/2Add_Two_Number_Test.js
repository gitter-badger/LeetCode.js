var Add_two_number = require('../Src/2Add_Two_Numbers').addTwoNumbers;

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var Test = function (cb) {
    var case1 = {
        value1: {
            val: 2,
            next: {
                val: 4,
                next: {
                    val: 3,
                    next: null
                }
            }
        },
        value2: {
            val: 5,
            next: {
                val: 6,
                next: {
                    val: 4,
                    next: null
                }
            }
        }
    };
    var result =  {
        val: 7,
        next: {
            val: 0,
            next:  {
                val: 8,
                next: null
            }
        }
    };
    var Node = cb(case1.value1, case1.value2);
    if(Node.val !== 7 || Node.next.val !== 0 || Node.next.next.val !== 8) {
        console.log('Test Error!');
    }
};

Test(Add_two_number);
