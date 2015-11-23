/**
 * Given an array nums, there is a sliding window of size k
 * which is moving from the very left of the array to the very right.
 * You can only see the k numbers in the window.
 * Each time the sliding window moves right by one position.
 *
 * @example,
 * Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.
 *
 *    Window position                Max
 *    ---------------               -----
 *   [1  3  -1] -3  5  3  6  7       3
 *    1 [3  -1  -3] 5  3  6  7       3
 *    1  3 [-1  -3  5] 3  6  7       5
 *    1  3  -1 [-3  5  3] 6  7       5
 *    1  3  -1  -3 [5  3  6] 7       6
 *    1  3  -1  -3  5 [3  6  7]      7
 * Therefore, return the max sliding window as [3,3,5,5,6,7].
 *
 * @see:
 * You may assume k is always valid,
 * ie: 1 ≤ k ≤ input array's size for non-empty array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var len = nums.length;
    var result = [];
    var temp = 0;
    if(k === 0) {
        return [];
    }
    if(k === 1) {
        return nums;
    }
    for(var i = k - 1 ; i < len; i++) {
        for(var j = i - k + 1; j < i + 1; j++) {
            if(nums[j] > temp) {
                temp = nums[j];
            }
        }
        result.push(temp);
        temp = 0;
    }

    return result;
};


exports.maxSlidingWindow = maxSlidingWindow;
