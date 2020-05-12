// add(1); // 1

// add(1)(2); // 3

// add(1)(2)(3); // 6

// add(1)(2, 3); // 6

// add(1, 2)(3); // 6

// add(1, 2, 3); // 6

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function pass(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

// 箭头函数
// const curry = (func) =>
//   (curried = (...args) =>
//     args.length >= func.length
//       ? func(...args)
//       : (...args2) => curried(...args, ...args2))

function _add(a, b, c) {
  return a + b + c
}

// let add = currying(_add)

// 这种写法只能满足前三个例子
function add(a) {
  function sum(b) {
    a = a + b
    return sum
  }

  sum.toString = () => a

  return sum
}

console.log('add(1)', add(1))

console.log('add(1)(2)', add(1)(2))

console.log('add(1)(2)(3)', add(1)(2)(3))

console.log('add(1)(2, 3)', add(1)(2, 3))

console.log('add(1, 2)(3)', add(1, 2)(3))

console.log('add(1, 2, 3)', add(1, 2, 3))
