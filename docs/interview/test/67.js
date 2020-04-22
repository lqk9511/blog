// [2, 10, 3, 4, 5, 11, 10, 11, 20]
// [[2, 3, 4, 5], [10, 11], [20]]

let arr = []

// 随机生成
for (let index = 0; index < 10; index++) {
  arr.push(Math.floor(Math.random() * 100))
}

// 排序去重
arr = Array.from(new Set(arr)).sort((a, b) => a - b)

// 分类
let obj = {}

arr.forEach((item) => {
  const _ = Math.floor(item / 10)
  console.log(_)
  if (!obj[_]) obj[_] = []
  obj[_].push(item)
})

let resArr = []
for (const key in obj) if (obj.hasOwnProperty(key)) resArr.push(obj[key])

console.log(resArr)
