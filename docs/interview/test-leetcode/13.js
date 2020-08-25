/**
 * @param {number} num
 * @return {string}
 */
var romanToInt = function (s) {
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

  let res = 0

  for (let i = 0; i < _values.length; i++) {
    while (s.startsWith(_values[i])) {
      s = s.substring(_values[i].length)
      res += _keys[i]
    }
  }

  if (res > 3999) res = 3999
  if (res < 1) res = 1
  return res
}

console.log(romanToInt('LVIII'))
