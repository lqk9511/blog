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
      this.result = this.result * 10 + +str
      console.log('Automaton -> get -> this.result', this.result)
      this.result = Math.min(
        this.result,
        this.signed == 1 ? this.INT_MAX : -this.INT_MIN
      )
    }

    if (this.status === 'signed') {
      if (str === '-') this.signed = -1
      else this.signed = 1
    }
  }
}

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let automaton = new Automaton()
  for (const s of str) {
    automaton.get(s)
  }
  return automaton.signed * automaton.result
}

console.log('myAtoi', myAtoi('42'))
console.log('myAtoi', myAtoi('-42'))
console.log('myAtoi', myAtoi('42 asd'))
console.log('myAtoi', myAtoi('asdas 42'))
console.log('myAtoi', myAtoi('-9998899798798742'))
