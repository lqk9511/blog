/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString()
  return x === x.split('').reverse().join('')
}

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 当 x < 0时，不是回文数
  // 同样，如果数字最后一位是 0 ，则第一位也应该是 0 ，只有 0 满足
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false

  let revertedNumber = 0
  while (x > revertedNumber) {
    revertedNumber = (x % 10) + revertedNumber * 10
    x = Math.floor(x / 10)
  }

  // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
  // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
  // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
  return x === revertedNumber || x === Math.floor(revertedNumber / 10)
}
