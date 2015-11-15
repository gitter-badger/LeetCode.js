/**
 * Given a linked list,
 * remove the nth node from the end of list and return its head.
 *
 * For example,
 *
 * Given linked list: 1->2->3->4->5, and n = 2.
 *
 * After removing the second node from the end,
 * the linked list becomes 1->2->3->5.
 *
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
 */

/**
 * Definition for singly-linked list.
 *
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 
 /**
  * @param {ListNode} head
  * @param {number} n
  * @return {ListNode}
  */
var removeNthFromEnd = function(head, n) {
    var len = ListNodeCount(head);
    var goal = len - n + 1;
    var count = 1;
    var temp = head;
    if(goal === 1) {
        return head.next;
    }
    else {
        while(temp !== null) {
            count++;
            if(count === goal) {
                if(goal === len) {
                    temp.next = null;
                    return head;
                }
                temp.next = temp.next.next;
                return head;
            }
            temp = temp.next;
        }
    }
};

/**
 * @description return the length of a singly-linked list
 * @param {ListNode} head
 * @return {number}
 */
var ListNodeCount = function(head) {
    var count = 0;
    while(head !== null) {
        count++;
        head = head.next;
    }
    return count;
};

exports.removeNthFromEnd = removeNthFromEnd;
