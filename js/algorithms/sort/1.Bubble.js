// 原理：
// 1.比较相邻元素，如果第二个比第一个大（小），则交换顺序；
// 2.对每一对相邻元素进行相同操作,把最大（小）元素排到最后
// 3.重复上述步骤直至排序完成
const bubbleSort = function (arr) {
  let len = arr.length
  let temp
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp 
      }
    }
  }
}