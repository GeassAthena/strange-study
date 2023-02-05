/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a-b)
    const ans = []
    let path = []
    
    const _dfs = (choosed, cur) => {
        if (cur === nums.length) {
            ans.push(path.slice())
            return
        }
        // 不选
        _dfs(false, cur + 1)
        
        // 剔除上一个数字与自己相同
        if (!choosed && cur > 0 && nums[cur - 1] === nums[cur]) {
            return
        }

        path.push(nums[cur])
        _dfs(true, cur + 1)
        path = path.slice(0, path.length - 1)
    }

    _dfs(false, 0)

    return ans
};
// @lc code=end

