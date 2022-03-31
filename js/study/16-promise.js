/*
 * @Author: bing.ma
 * @Date: 2022-03-01 15:48:58
 * @LastEditTime: 2022-03-02 09:58:49
 * @LastEditors: bing.ma
 * @Description: promise
 * @FilePath: /strange-study/js/study/16-promise.js
 */

const PENDING = 'pending'
const FULFIIELD = 'fulfiled'
const REJECTED = 'rejected'

function Promise (executor) {
  let self = this
  self.status = PENDING
  
}



new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve({ test: 1 })
      resolve({ test: 2 })
      reject({ test: 2 })
  }, 1000)
}).then((data) => {
  console.log('result1', data)
},(data1)=>{
  console.log('result2',data1)
}).then((data) => {
  console.log('result3', data)
})
//result1 { test: 1 }
//result3 undefined