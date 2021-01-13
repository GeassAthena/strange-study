const fs = require('fs')

let data = fs.readFileSync('test.txt', 'utf-8')
console.log('before write:', data)
fs.writeFileSync('test.txt', 'utf-9')
let data1 = fs.readFileSync('test.txt', 'utf-8')
console.log('after write:', data1)
fs.stat('test.txt', function(err, data) {
	if(err) {
		console.log(err)
	} else {
		console.log(data)
	}
})