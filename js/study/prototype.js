let obj = {
    a: 1,
    function: function add() {
        this.a++
    }
}

function Foo() {
    cool: function a(){
        console.log(cool)
    }
}

let foo = new Foo()
console.log(Object.getPrototypeOf(foo) === Foo.prototype)
console.log(Foo.a)
console.log(parseInt(true))
console.log(false == [])
console.log([] + {})