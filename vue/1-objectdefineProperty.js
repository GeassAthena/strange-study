let car = {
    'brand': 'BMW',
    // 'price': '30w'
}
let val = '30w'

Object.defineProperty(car, 'price', {
    // value: '30w', // 默认值
    // writable: true, // 可读写
    enumerable: true, // 可迭代
    configurable: true, // 可配置
    get () {
        console.log('price is read.')
        return val
    },
    set (newVal) {
        console.log('price is change.')
        val = newVal
    },
})

car.price
car.price = '31w'