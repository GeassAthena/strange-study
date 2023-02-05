function sub () {
    var a = 1

    return function c () {
        a++
        console.log(a);
    }
}
let b = sub()
b()
b()