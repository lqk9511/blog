// var longestPalindrome = function (s) {
//   let length = s.length,
//     res = '',
//     dp = Array.from(new Array(length), () => new Array(length).fill(0))

//   for (let i = 0; i < length; i++) {
//     for (let j = i; j >= 0; j--) {
//       dp[i][j] = s[i] == s[j] && (i - j < 2 || dp[i - 1][j + 1])
//       if (dp[i][j] && i - j + 1 > res.length) {
//         res = s.substring(j, i + 1)
//       }
//     }
//   }
//   return res
// }

// console.log(longestPalindrome('civilwartestingwhe'))

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0
  const max = 0x7fffffff,
    min = -0x80000000

  while (x != 0) {
    res = res * 10 + (x % 10)
    x = parseInt(x / 10)
    if (res > max - 1 || res < min) return 0
  }
  return res
}

// console.log(reverse(123))

// const list = [1, 2, 3]
// const square = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * num)
//     }, 1000)
//   })
// }

// function test() {
//   async function next() {
//     if (list.length) {
//       const res = await square(list.shift())
//       console.log(res)
//       next()
//     }
//   }
//   next()
// }
// test()

const testTarget = {
  name: 'jeff',
  reg: new RegExp(/\w\d\w/g),
  tree: {
    value: 'root',
    children: [
      {
        value: 'A',
        children: [
          { value: 'A-a', children: [{ value: 'A-a-1' }, { value: 'A-a-2' }] },
          { value: 'A-b', children: [{ value: 'A-b-1' }, { value: 'A-b-2' }] },
        ],
      },
      {
        value: 'B',
        children: [
          { value: 'B-a', children: [{ value: 'B-a-1' }, { value: 'B-a-2' }] },
          { value: 'B-b', children: [{ value: 'B-b-1' }, { value: 'B-b-2' }] },
        ],
      },
      {
        value: 'C',
        children: [
          { value: 'C-a', children: [{ value: 'C-a-1' }, { value: 'C-a-2' }] },
          { value: 'C-b', children: [{ value: 'C-b-1' }, { value: 'C-b-2' }] },
        ],
      },
    ],
  },
  deepQuote: null,
}

const isType = (obj, type) =>
  Object.prototype.toString.call(obj).slice(8, -1) === type

function getEmpty(obj) {
  if (isType(obj, 'Object')) return {}
  if (isType(obj, 'Array')) return []
  if (isType(obj, 'Function'))
    return Function(
      `"use strict"; return (function() {return ${obj.toString()}})`
    )
  if (isType(obj, 'RegExp')) {
    // \w 用于匹配字母，数字或下划线字符，相当于[A-Za-z0-9_]
    const reFlags = /\w*$/
    const reg = new RegExp(obj.source, reFlags.exec(obj))
    reg.lastIndex = obj.lastIndex
    return reg
  }
  return obj
}

function dfsClone(target) {
  let result = getEmpty(target),
    stack = [],
    recordMap = new Map()

  function checkCurrent(t, r) {
    if (t !== r) {
      stack.push([t, r])
      recordMap.set(t, r)
    }
  }

  checkCurrent(target, result)

  while (stack.length) {
    let [tar, res] = stack.pop()
    for (const key in tar) {
      if (tar.hasOwnProperty(key)) {
        const element = tar[key]

        if (recordMap.has(element)) {
          res[key] = recordMap.get(element)
          continue
        }

        res[key] = getEmpty(element)
        checkCurrent(element, res[key])
      }
    }
  }

  return result
}

console.log(dfsClone(testTarget))
