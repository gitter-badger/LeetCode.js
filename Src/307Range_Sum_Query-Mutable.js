/**
 * Given an integer array nums,
 * find the sum of the elements between indices i and j (i ≤ j), inclusive.
 *
 * @function update(i, val)
 *          - modifies nums by updating the element at index i to val.
 * @example:
 * Given nums = [1, 3, 5]
 *
 * sumRange(0, 2) -> 9
 * update(1, 2)
 * sumRange(0, 2) -> 8
 *
 * @see
 * Note:
 * The array is only modifiable by the update function.
 * You may assume the number of calls to update
 * and sumRange function is distributed evenly.
 */

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.num = nums;
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    this.num[i] = val;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var sum = 0;
    for(var index = i; index < j + 1; index++) {
        sum += this.num[index];
    }

    return sum;
};


var nums = [1, 3, 5];
var numArray = new NumArray(nums);
console.log(numArray.sumRange(0, 1));
numArray.update(1, 10);
console.log(numArray.sumRange(0, 2));
