/**
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made
 * by splicing together the nodes of the first two lists.
 */

/**
 * @description Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var temp = new ListNode(0);
    var head = temp;
    while(l1 !== null && l2 !== null) {
        if(l1.val < l2.val) {
            temp = temp.next = new ListNode(l1.val);
            l1 = l1.next;
        }
        else {
            temp = temp.next = new ListNode(l2.val);
            l2 = l2.next;
        }
    }
    if(l1 === null) {
        while(l2 !== null) {
            temp = temp.next = new ListNode(l2.val);
            l2 = l2.next;
        }
    }
    if(l2 === null) {
        while(l1 !== null) {
            temp = temp.next = new ListNode(l1.val);
            l1 = l1.next;
        }
    }
    return head.next;
};

exports.mergeTwoLists = mergeTwoLists;
