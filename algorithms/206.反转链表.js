/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
    // 时间复杂度 O(n)
    // 空间复杂度 O(1)
    let newHead = null
    let cur = head
    let prev = null

    while (cur) {
        let next = cur.next
        if (!next) {
            newHead = cur
        }
        cur.next = prev
        prev = cur
        cur = next
    }

    return newHead
};
// @lc code=end

