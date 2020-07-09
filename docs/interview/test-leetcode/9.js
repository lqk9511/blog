/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString()
  return x === x.split('').reverse().join('')
}
