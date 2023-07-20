/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head, cache = new Map()) {
    if (head === null) return null

    if (!cache.has(head)) {
        cache.set(head, { val: head.val })
        Object.assign(cache.get(head), {next: copyRandomList(head.next, cache), random: copyRandomList(head.random, cache)})
    }
    return cache.get(head)
};
// @lc code=end

