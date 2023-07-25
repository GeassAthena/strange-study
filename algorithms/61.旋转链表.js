/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    let cur = head;
    let len = 1;
    while(cur.next) {
         len++;
         cur = cur.next;
    }
    k %= len;
    if (k === 0) {
        return head;
    }
    cur.next = head;
    let newHead = head;
    for(let i = 0; i < len - k - 1; i++){
        newHead = newHead.next;
    }
    head = newHead.next;
    newHead.next = null;
    return head;
};