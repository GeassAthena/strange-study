function Person() {
    // Person 是一个构造函数, prototype是函数 Person.prototype 
    //函数的 prototype 属性指向了一个对象，这个对象正是
    //调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型。
}

var person = new Person();


console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
console.log(parseInt(true))
console.log(false == [])
console.log([] + {})