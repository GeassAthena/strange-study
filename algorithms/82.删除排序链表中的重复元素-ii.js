/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;

  let newHead = {};
  newHead.next = head;
  let cur = newHead;
  let set = new Set();
  let dupSet = new Set();
  while (cur.next) {
    if (set.has(cur.next.val)) {
      dupSet.add(cur.next.val);
      cur.next = cur.next.next;
    } else {
      set.add(cur.next.val);
      cur = cur.next;
    }
  }
  cur = newHead;
  while (cur.next) {
    if (dupSet.has(cur.next.val)) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return newHead.next;
};
// @lc code=end

