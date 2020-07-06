/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const INT_MAX = Math.pow(2, 31) - 1,
    INT_MIN = Math.pow(-2, 31)
  let res = '',
    flag = ''

  str = str.trimLeft()

  if (!/^[-|+|0-9]/.test(str)) return 0

  if (/^[-|+]/.test(str)) {
    flag = str.slice(0, 1)
    str = str.slice(1)
  }

  try {
    str = str.match(/^\d+/)[0]
  } catch (e) {
    return 0
  }

  res = Number(flag + str)

  if (isNaN(res)) return 0

  if (res >= INT_MAX) return INT_MAX
  if (res <= INT_MIN) return INT_MIN

  return res
}

console.log('myAtoi', myAtoi('42'))
console.log('myAtoi', myAtoi('-42'))
console.log('myAtoi', myAtoi('42 asd'))
console.log('myAtoi', myAtoi('asdas 42'))
console.log('myAtoi', myAtoi('-9998899798798742'))
