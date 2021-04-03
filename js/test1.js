let arr = ['a', 'b', 'c', 'd']
let cur = arr.splice(2, 1)[0]
console.log(cur, arr)
arr.splice(3, 0, cur)
console.log(arr)