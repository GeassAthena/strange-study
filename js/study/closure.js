for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j)
        }, j * 1000)
    })(i)
}
for (let index = 0; index < 5; index++) {
    setTimeout(() => {
        console.log(index)
    }, 1000)
}