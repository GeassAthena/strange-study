/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null;
  let fast = head, slow = head;
  while (fast !== null) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return null;
    }

    if (fast === slow) {
      let cur = head;
      while (cur !== slow) {
        slow = slow.next;
        cur = cur.next;
      }
      return cur;
    }
  }
  return null;
};
// @lc code=end

