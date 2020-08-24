/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const _romanMap = new Map([
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [10, 'X'],
    [5, 'V'],
    [1, 'I'],
  ])
  let res = ''

  if (num > 3999) num = 3999
  if (num < 1) num = 1

  for (const [key, value] of _romanMap) {
    const multiple = num / key
    num %= key
    if (multiple === 9) {
      if (key === 1) {
        res += `${value}X`
      } else if (key === 10) {
        res += `${value}C`
      } else if (key === 100) {
        res += `${value}M`
      }
    } else if (multiple > 1) {
      if (multiple === 4) {
        if (key === 1) {
          res += `${value}V`
        } else if (key === 10) {
          res += `${value}L`
        } else if (key === 100) {
          res += `${value}D`
        }
      } else {
        res += stringMul(value, Math.floor(multiple))
      }
    } else if (multiple === 1) {
      res += value
      return res
    }
  }

  return res
}

function stringMul(s, mul) {
  res = ''
  for (let i = 0; i < mul; i++) {
    res += s
  }
  return res
}

console.log(intToRoman(1994))
