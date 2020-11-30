let arr = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

//ES6提供的扁平化函数flat(depth)，参数depth代表数组维度-1，默认为1，不清楚可以使用Ifinity
console.log('flat: ', arr.flat(3))

//for循环实现，或者使用while + some效果类似
function flat_for(arr) {
    let res = []
    arr.forEach(el => {
        if (Array.isArray(el)) {
            res.push(...flat_for(el))
        } else {
            res.push(el)
        }
    });
    return res
}
console.log('flat_for: ', flat_for(arr))

//reduce
function flat_reduce(arr) {
    return arr.reduce((res, next) => {
        return res.concat(Array.isArray(next) ? flat_reduce(next) : next)
    }, [])
}
console.log('flat_reduce: ', flat_reduce(arr))

//generate function
function* flat_generate(arr){
    for(let item of arr){
        if(Array.isArray(item)){
            yield* flat_generate(item) 
        }else{
            yield item
        }
    }
}
const res = [...flat_generate(arr)]
console.log('flat_generate: ', res)