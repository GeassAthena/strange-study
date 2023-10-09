/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0);
  let map = {};

  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0]);
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }
  let queue = [];
  let ans = [];
  inDegree.forEach((degree, i) => {
    if (degree === 0) {
      queue.push(i);
      ans.push(i);
    }
  })
  let count = 0;
  while (queue.length) {
    let selected = queue.shift();
    count++;
    let target = map[selected];
    if (target && target.length) {
      target.forEach((t) => {
        inDegree[t]--;
        if (inDegree[t] === 0) {
          queue.push(t);
          ans.push(t);
        }
      })
    }
  }

  return count === numCourses ? ans : [];
};
// @lc code=end

