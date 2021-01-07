let a, b, rest
[a, b] = [1, 2]
console.log(a, b);
({ a, b , ...rest} = { a: 10, b: 20, c: 30, d: 40})
console.log(a, b)
console.log(rest)
let person = {
    name: 'xiaoming',
    age: 18,
    height: 175
}
let {name, age, height} = person
console.log(name, age, height)