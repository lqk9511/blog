// 十万数据
let arrs = new Array(100000)
console.time('for')
for (let i = 0; i < arrs.length; i++) {}
console.timeEnd('for')
console.time('forEach')
arrs.forEach((arr) => {})
console.timeEnd('forEach')

// for: 2.734ms | 2.640ms | 2.672ms
// forEach: 0.377ms | 0.382ms | 0.305ms

// 百万数据
// let arrs = new Array(1000000)
// console.time('for')
// for (let i = 0; i < arrs.length; i++) {}
// console.timeEnd('for')
// console.time('forEach')
// arrs.forEach((arr) => {})
// console.timeEnd('forEach')

// for: 3.622ms | 3.258ms | 3.525ms
// forEach: 3.116ms | 2.650ms | 2.796ms

// 千万数据
// let arrs = new Array(10000000)
// console.time('for')
// for (let i = 0; i < arrs.length; i++) {}
// console.timeEnd('for')
// console.time('forEach')
// arrs.forEach((arr) => {})
// console.timeEnd('forEach')

// for: 9.321ms | 9.849ms | 9.507ms
// forEach: 36.956ms | 26.372ms | 29.404ms
