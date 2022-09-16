
const _getUniqueNums = (start,end,n) => {
  let ans = new Set()
  while (ans.size < n) {
      ans.add(Math.round(Math.random() * (end - start)) + start) 
  }
  // 补全代码
  return Array.from(ans)
}
console.log(_getUniqueNums(2, 10 , 2))