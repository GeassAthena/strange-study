/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
    if (!head) return head
    let temp = head
    while (temp && temp.next) {
        if (temp.next && temp.val === temp.next.val) {
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
    }
    return head
};
// @lc code=end

