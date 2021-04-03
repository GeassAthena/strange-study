const events = require('events')

let eventEmitter = new events.EventEmitter()

let connectHandler = function connected(from) {
    console.log('connect with ' + from.name)
    eventEmitter.emit('recieve', from.msg)
}
let recieveHandler = function handler(msg) {
    console.log('recieve message : ' + msg)
}
eventEmitter.on('connect', connectHandler)
eventEmitter.on('recieve', recieveHandler)

eventEmitter.emit('connect', {
    name: 'xiaoming',
    msg: 'hello event'
})
console.log('end...')