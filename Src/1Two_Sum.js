/*
 * Given an array of integers,
 * find two numbers such that they add up to a specific target number.
 *
 * The function twoSum should return indices of the two numbers
 * such that they add up to the target, where index1 must be less than index2.
 * Please note that your returned answers (both index1 and index2) are not zero-based.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 */

 /**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
var twoSum = function(nums, target) {
    var i,
        j,
        len = nums.length;
    for(i = 0; i < len; i++) {
        if(nums[i] > target) {
            break;
        }
        for(j = i + 1; j < len; j++) {
            if(nums[i] + nums[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }
};

var twoSum1 = function(nums, target) {
    var map = [];
    var temp;
    var result;
    nums.forEach(function (elem, i) {
        temp = map[elem];
        if(temp !== undefined) {
            result = [temp+1, i+1];
        }
        else{
            map[target - elem] = i;
        }
    });
    return result;
};

exports.twoSum = twoSum;
exports.twoSum1 = twoSum1;
