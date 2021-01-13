console.log("I'm child.")
addEventListener('message', (evt) => {
    console.log(evt.data)
})
setTimeout(() => {
    postMessage('child worker send a message')
}, 3000)