var Stack = require('../Src/225Implement_Stack_using_Queues').Stack;
var assert = require('assert');

var Test = function () {
    var stack = new Stack();
    assert.equal(stack.empty(), true, 'Test Case 1 Error!');
    stack.push(1);
    assert.equal(stack.top(), 1, 'Test Case 2 Error!');
    assert.equal(stack.empty(), false, 'Test Case 3 Error!');
    stack.pop();
    assert.equal(stack.empty(), true, 'Test Case 1 Error!');
};


console.log('++ node ./Tets/225Implement_Stack_using_Queues_Test.js');
Test();
