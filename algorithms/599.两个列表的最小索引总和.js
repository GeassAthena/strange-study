/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let res = [];
    let sum = list1.length + list2.length;
    const map = new Map();
    for (let i = 0; i < list1.length; i++) {
      map.set(list1[i], i);
    }
  
    list2.forEach((n1, idx) => {
      if (map.has(n1)) {
        let idx2 = map.get(n1);
        if (idx + idx2 < sum) {
          res = [n1];
          sum = idx + idx2
        } else if (idx + idx2 === sum) {
          res.push(n1);
        }
      }
    })
  
    return res;
  };
  // @lc code=end
  
  