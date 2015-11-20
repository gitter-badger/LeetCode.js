/**
 * Median is the middle value in an ordered integer list.
 * If the size of the list is even, there is no middle value.
 * So the median is the mean of the two middle value.
 *
 * @example
 * Examples:
 * [2,3,4] , the median is 3
 *
 * [2,3], the median is (2 + 3) / 2 = 2.5
 *
 * Design a data structure that supports the following two operations:
 *
 * @function void addNum(int num)
 *      - Add a integer number from the data stream to the data structure.
 * @function double findMedian()
 *      - Return the median of all elements so far.
 * @see
 * For example:
 *
 * add(1)
 * add(2)
 * findMedian() -> 1.5
 * add(3)
 */

/**
 * @constructor
 */
var MedianFinder = function() {
    this.val = [];
    this.count = 0;
};

/**
 * @description Adds a num into the data structure.
 * @param {integer} word
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.val.push(num);
    this.val.sort(function(a, b) {
        return a - b;
    });
    this.count++;
};

/**
 * @description Return median of current data stream
 * @return {double}
 */
MedianFinder.prototype.findMedian = function() {
    var temp = this.count / 2;
    if(this.count % 2 !== 0) {
        return this.val[parseInt(temp) + 1];
    }
    else {
        if(temp === 1) {
            return  (this.val[0] + this.val[1]) / 2;
        }
        return (this.val[temp] + this.val[temp + 1]) / 2;
    }
};
