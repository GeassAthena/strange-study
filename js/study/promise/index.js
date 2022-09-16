new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({test: 1})
    resolve({test: 2})
    reject({test: 2})
  }, 1000)
  setTimeout(() => {
    // resolve({test: 1})
    // resolve({test: 2})
    reject({test: 2})
  })
}).then((res) => {
  console.log('res:', res)
}, (err) => {
  console.log('err:', err)
}).then(res => {
  console.log('final:', res)
})