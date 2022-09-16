import { b, counter1 } from './m4.mjs'
counter1()
console.log('in a, b = %d', b)
export var a = 1
export function counter () {
  a++
}