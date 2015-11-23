/**
 * Given a sorted array of integers,
 * find the starting and ending position of a given target value.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * If the target is not found in the array, return [-1, -1].
 *
 * @example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var start = -1,
        end = -1;
    var len = nums.length;
    var i = 0;
    while(i < len && nums[i] !== target) {
        i++;
    }
    start = i;
    nums.forEach(function (elem, index, arr) {
        if(elem === target) {
            end = index;
        }
    });

    if(end === -1) {
        start = -1;
    }
    return [start, end];
};

exports.searchRange = searchRange;
