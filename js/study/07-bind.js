/* 
  bind 是什么, 要支持什么, 1.更改this指向 2.支持传参 3.函数作为构造函数时this不更改指向，传入参数仍然生效
 */

Function.prototype.bind2 = function (contex) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind2 - what is trying to be bound is not callable");
  }
  let self = this
  let args = Array.prototype.splice.call(arguments, 1)
  let fNOP = function () {}
  let fBound = function () {
    let bindArgs = Array.prototype.splice.call(arguments)
    return self.apply(this instanceof fBound ? this : contex, args.concat(bindArgs))
  }
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound
}
let foo = {
  val: 1
}

function bar () { console.log(this.val) }

let bindFoo = bar.bind2(foo)

bindFoo()