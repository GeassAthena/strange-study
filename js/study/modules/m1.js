console.log('in m1')
var m2 = require('./m2')
m2.addx(1)
m2.incounter()
var x = 5
var obj = {
  y: 5
}
var addx = function (val) {
  obj.y = obj.y + val
  x += val
  console.log('x: %d, y: %d', x, obj.y)
}
var incounter = function () {
  x++
  obj.y++
}

module.exports = {
  x: x,
  addx: addx,
  obj: obj,
  incounter: incounter
}