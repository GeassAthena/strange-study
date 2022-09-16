console.log('in m2')
var m1 = require('./m1')
// m1.addx(1)

var x = 5
var obj = {
  y: 5
}
var addx = function (val) {
  console.log('m2: x: %d, y: %d', x, obj.y)
  obj.y = obj.y + val
  x += val
  console.log('m2: x: %d, y: %d', x, obj.y)
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