/**
 * Given a sorted array, remove the duplicates in place
 * such that each element appear only once and return the new length.
 *
 * @see Do not allocate extra space for another array,
 *      you must do this in place with constant memory.
 *
 * For example,
 * Given input array nums = [1,1,2],
 *
 * Your function should return length = 2,
 * with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the new length.
 */


/**
 * @TODO Implement Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var flag;
    nums.forEach(function(elem, index, array) {
        if(flag === elem) {
            nums.splice(index, 1);
        }
        else {
            flag = elem;
        }
    });

    return nums;
};

exports.removeDuplicates = removeDuplicates;
