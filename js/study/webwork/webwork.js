console.log("i'm main work.")
let w1 = new Worker('./webworkChild.js')
w1.addEventListener('message', (evt) => {
    console.log(evt.data)
})
setTimeout(() => {
    w1.postMessage('Main worker send a message')
}, 6000)