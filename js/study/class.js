function Person(name, age) {
    this.age = age
    this.name = name
    this.sayHello = sayHello
}

let sayHello = function () {
    console.log(`My name is ${this.name}, I'm ${this.age} years old`)
}

let xiaoming = new Person('小明', 12)
let xiaohong = new Person('小红', 11)
xiaoming.sayHello()
xiaohong.sayHello()