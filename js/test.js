// let a= 1
// const _getUniqueNums = (start,end,n) => {
//   console.log(1)
//   let ans = new Set()
//   while (ans.size < n) {
//       ans.add(Math.round(Math.random() * (end - start)) + start) 
//   }
//   // 补全代码
//   return Array.from(ans)
// }
// console.log(_getUniqueNums(2, 10 , 2))


function flow(fn) {
    return (i) => {
        if (arguments.length > 1) {
            return flow(...Array.from(arguments).splice(1))(fn(i))
        } else {
            return fn(i)
        }
    }
}



const f = flow(parseInt, (i) => i*i, (i) => i + 1, (i) => i.toString())
console.log(f('-2'))