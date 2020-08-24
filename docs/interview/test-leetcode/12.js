/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const _keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    _values = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I',
    ]

  let res = ''

  if (num > 3999) num = 3999
  if (num < 1) num = 1

  for (let i = 0; i < _keys.length; i++) {
    while (num >= _keys[i]) {
      num -= _keys[i]
      res += _values[i]
    }
  }
  return res
}

console.log(intToRoman(58))
