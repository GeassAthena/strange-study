/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if (left === right || !head || !head.next) return head;

  let newHead = new ListNode(null, head);
  let cur = newHead;
  let index = 0;
  // 一次遍历，先找到左侧节点，反转中间的链表后拼接回去
  while (cur.next) {
    if (index < left - 1) {
      cur = cur.next;
      index++;
    } else {
      let tail = cur.next;
      let rCur = cur.next;
      let prev = null;
      while (index < right) {
        index++;
        let next = rCur.next
        rCur.next = prev
        prev = rCur
        rCur = next
      }
      cur.next = prev;
      tail.next = rCur;
      break;
    }
  }

  return newHead.next;
};
// @lc code=end

