/**
 *浅拷贝实现，返回一个新对象，拥有和源对象相同的属性和值，但是
 *如果源对象有引用类型的属性值，则拷贝的是引用
 *
 * @param {*} src
 * @return {*} target
 */
function shallowCopy(src) {
    let target = {}
    for (let key in src) {
        if (src.hasOwnProperty(key)) {
            target[key] = src[key]
        }
    }
    return target
}

function deepCopy(src) {
    let target = Array.isArray(src) ? [] : {}
    for (let key in src) {
        if (src.hasOwnProperty(key)) {
            if (typeof (src[key]) === 'object') {
                target[key] = deepCopy(src[key])
            } else {
                target[key] = src[key]
            }
        }
    }
    return target
}

let obj1 = {
    name: 'Mabing',
    age: 23,
    homeMember: ['ming']
}
let obj2 = obj1
let obj3 = shallowCopy(obj1)
let obj4 = deepCopy(obj1)
let obj5 = JSON.parse(obj1.stringify())
// console.log(obj1, obj2, obj3)
obj2.name = 'mark'
// console.log(obj1, obj2, obj3)
obj3.name = 'jack'
// console.log(obj1, obj2, obj3)
obj3.homeMember[0] = 'lv'
obj4.homeMember[0] = 'haha'
console.log(obj1, obj2, obj3, obj4)