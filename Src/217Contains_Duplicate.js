/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true
 * if any value appears at least twice in the array,
 * and it should return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var flag = [];
    var len = nums.length;

    for(var i = 0; i < len; i++) {
        if(flag[nums[i]] !== undefined) {
             return true;
        }
        else {
            flag[nums[i]] = 1;
        }
    }

    return false;
};

exports.containsDuplicate = containsDuplicate;
