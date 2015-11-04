/*
You are given two linked lists representing two non-negative numbers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var bit = 1;
    var sum = 0;
    var Node;
    while(l1 !== null || l2 !== null) {
        if(l1 !== null) {
            sum += l1.val * bit;
            l1 = l1.next;
        }
        if(l2 !== null) {
            sum += l2.val * bit;
            l2 = l2.next;
        }
        bit *= 10;
    }
    do{
        Node = ListNode(sum % 10);
        sum /= 10;
        Node = Node.next;
    }while(sum % 10);

    return Node;
};
