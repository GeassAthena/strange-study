/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let ans = [];

  const dfs = (s, temp) => {
    if (s.length === 0) {
      ans.push(temp.slice());
      return;
    }

    for (let i = 0; i < s.length; i++) {
      let t = s.slice(0, i + 1);
      if (isRome(t)) {
        temp.push(t)
        dfs(s.slice(i + 1), temp);
        temp.pop();
      }
    }
  }

  const isRome = (s) => {
    let i = 0, j = s.length - 1, flag = true;
    while (i < j) {
      if (s[i] !== s[j]) {
        flag = false;
        break;
      }
      i++;
      j--;
    }
    return flag;
  }

  dfs(s, []);
  return ans;
};
// partition('aab');
// @lc code=end

