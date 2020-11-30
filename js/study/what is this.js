function foo() {
    // debugger
    console.log('foo')
}

console.log(bar())
function bar() {
    console.log('bar')
    foo()
}
var a = 2
function baz() {
    console.log('baz', this.a)
    bar()
}
let num = new Number(10)
baz()