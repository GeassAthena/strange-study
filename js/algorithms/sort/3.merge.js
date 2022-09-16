const mergeSort = function (arr) {
  let len = arr.length
  if (len < 2) {
    return arr
  }
  let mid = Math.floor(len / 2)
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

function merge (left, right) {
  let result = []

  while(left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  if (left.length) {
    result = [...result, ...left]
  }
  if (right.length) {
    result = [...result, ...right]
  }
  return result
}

console.log(mergeSort([1, 4, 3, 5, 2, 6, 0, 5]))