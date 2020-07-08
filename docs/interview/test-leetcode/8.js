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

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const INT_MAX = Math.pow(2, 31) - 1,
    INT_MIN = Math.pow(-2, 31)
  let res = parseInt(str, 10)

  if (isNaN(res)) return 0
  else if (res > INT_MAX) return INT_MAX
  else if (res < INT_MIN) return INT_MIN
  return res
}

class Automaton {
  constructor() {
    this.INT_MAX = Math.pow(2, 31) - 1
    this.INT_MIN = Math.pow(-2, 31)
    this.overflowSign = false
    this.status = 'start'
    this.signed = 1
    this.result = 0
    this.autoMap = {
      start: ['start', 'signed', 'number', 'end'],
      signed: ['end', 'end', 'number', 'end'],
      number: ['end', 'end', 'number', 'end'],
      end: ['end', 'end', 'end', 'end'],
    }
  }

  getStatus(str) {
    if (/\s/.test(str)) return 0
    if (/[+|-]/.test(str)) return 1
    if (/\d/.test(str)) return 2
    return 3
  }

  get(str) {
    this.status = this.autoMap[this.status][this.getStatus(str)]
    if (this.status === 'number') {
      this.result = +(this.result * 10 + str)
      if (
        (this.signed === -1 && this.result >= -this.INT_MIN) ||
        this.result >= this.INT_MAX
      ) {
        this.overflowSign = true
        this.result = this.signed * this.INT_MAX
      }
    }

    if (this.status === 'signed') {
      if (str === '-') this.signed = -1
    }
  }
}

for (let index = 0; index < s.length; index++) {
  const element = s[index]
  console.log(element)
  if (index == 4) return
}
