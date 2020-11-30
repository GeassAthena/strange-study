/*
    yield与迭代器的next()建立双向消息传递
*/
let x = 1

function* foo() {
    x++
    let y = x * (yield 'hello')
    console.log(x)
    return y
}

function bar() {
    x++
}
let it = foo()
console.log(it.next())
bar()
console.log(it.next(7))

function* foo() {
    var x = yield 2;
    z++;
    var y = yield(x * z);
    console.log(x, y, z);
}
var z = 1;
var it1 = foo();
var it2 = foo();
var val1 = it1.next().value;
var val2 = it2.next().value;
val1 = it1.next(val2 * 10).value;
val2 = it2.next(val1 * 5).value;
it1.next(val2 / 2);
it2.next(val1 / 4);