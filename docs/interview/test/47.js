var obj = {
  '2': 3,
  '3': 4,
  length: 2,
  splice: Array.prototype.splice,
  push: Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)

const isArrayLike = obj =>
  obj && // 非 null undefined
  typeof obj === 'object' && // 是对象
  isFinite(obj.length) && // 是有穷数
  obj.length >= 0 && // 为非负数
  obj.length === Math.floor(obj.length) && // 整数
  obj.length < Math.pow(2, 32) // <4294967296

console.log(isArrayLike(obj))

var obj2 = {
  '2': 3,
  '3': 4,
  length: 2
}

Array.prototype.push.call(obj2, 1)
Array.prototype.push.call(obj2, 2)

console.log(obj2)

Array.prototype.forEach.call(obj2, item => console.log(item))
