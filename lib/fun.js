/**
 * @description assert two ListNode obj equal or not
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {bool}
 */
function nodeIsEqual(val1, val2) {
    var bool = true;
    while(val1 !== null && val2 !== null) {
        if(val1.val !== val2.val) {
            bool = false;
            break;
        }
        val1 = val1.next;
        val2 = val2.next;
    }

    return bool;
}

module.exports = {
    nodeIsEqual: nodeIsEqual
};
