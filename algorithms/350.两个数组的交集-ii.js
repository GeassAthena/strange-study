/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // 时间复杂度 O(m + n)
    // 空间复杂度 O(min(m,n))
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    };
    let res = []
    let map = new Map();
    nums1.forEach(el => {
        let count = map.get(el);
        map.set(el, count ? count + 1 : 1);
    });

    nums2.forEach(el => {
        let count = map.get(el);
        if (count && count > 0) {
            map.set(el, count - 1)
            res.push(el)
        }
    })
    return res
};
// @lc code=end

