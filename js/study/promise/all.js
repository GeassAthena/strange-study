Promise.all = function (arr) {
  let hasErr = false
  let results = []
  return new Promise((resolve, reject) => {
    arr.forEach(p => {
      if (hasErr) break
      p.then(res => {
        results.push(res)
      }, err => {
        if (!hasErr) hasErr = true
        reject(err)
      })
    })
    resolve(results)
  })
}