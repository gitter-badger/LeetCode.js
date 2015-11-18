/**
 * Given an array of n integers where n > 1, nums,
 * return an array output such that output[i]
 * is equal to the product of all the elements of nums except nums[i].
 *
 * Solve it without division and in O(n).
 *
 * For example, given [1,2,3,4], return [24,12,8,6].
 *
 * Follow up:
 * Could you solve it with constant space complexity?
 * @see
 * Note: The output array does not count as extra space
 * for the purpose of space complexity analysis.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var sum = 1;
    var flag = 0; // the numbers of zero in the array
    nums.forEach(function (elem) {
        if(elem !== 0) {
            sum *= elem;
        }
        else {
            flag++;
        }
    });
    nums.forEach(function (elem, index, arr) {
        if(flag >= 2) {
            arr[index] = 0;
        }
        else if(elem === 0) {
            arr[index] = sum;
        }
        else if(flag === 1){
            arr[index] = 0;
        }
        else {
            arr[index] = sum / elem;
        }
    });
    return nums;
};

exports.productExceptSelf = productExceptSelf;
