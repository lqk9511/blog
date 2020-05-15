let arr = [0, 1, 0, 3, 12]
let arr2 = [3, 0, 1, 0, 0, 7, 0, 0, 3, 12]

function moveZeroToLast(arr) {
  let index = 0,
    len = arr.length,
    count = 0
  while (index < len - count) {
    if (arr[index] === 0) {
      arr.splice(index, 1)
      arr.push(0)
      index--
      count++
    }
    index++
  }
  return arr
}

// console.log(moveZeroToLast(arr2))

function moveZeroToLast2(arr) {
  // 零出现个数
  let index = 0
  for (let i = 0, length = arr.length; i < length; i++) {
    if (arr[i] === 0) {
      index++
    } else if (index !== 0) {
      // 当前 索引 i - 零个数 index = 第一个零出现位置
      arr[i - index] = arr[i]
      arr[i] = 0
    }
  }
  return arr
}

console.log(moveZeroToLast2(arr2))
