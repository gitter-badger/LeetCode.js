/**
 * Implement the following operations of a stack using queues.
 *
 * @function push(x) -- Push element x onto stack.
 * @function pop() -- Removes the element on top of the stack.
 * @function top() -- Get the top element.
 * @function empty() -- Return whether the stack is empty.
 * Notes:
 * You must use only standard operations of a queue,
 * which means only push to back, peek/pop from front, size,
 * and is empty operations are valid.
 *
 * Depending on your language, queue may not be supported natively.
 * You may simulate a queue by using a list or deque (double-ended queue),
 * as long as you use only standard operations of a queue.
 *
 * You may assume that all operations are valid (for example,
 * no pop or top operations will be called on an empty stack).

/**
 * @constructor
 */
var Stack = function() {
    this.val = [];
    this.count = 0;
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.val.push(x);
    this.count++;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.val.pop();
    this.count--;
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.val[this.count-1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    if(this.count === 0) {
        return true;
    }

    return false;
};

exports.Stack = Stack;
