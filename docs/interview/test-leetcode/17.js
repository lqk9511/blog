/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const _map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  let res = [],
    digitsValue = []

  if (!digits.length) return res

  for (let i = 0; i < digits.length; i++) {
    digitsValue.push(_map[digits[i]])
  }
  backtrack('', 0)

  function backtrack(letter, index) {
    if (index === digitsValue.length) {
      res.push(letter)
      return
    }
    for (const l of digitsValue[index]) {
      backtrack(letter + l, index + 1)
    }
  }

  return res
}

console.log(letterCombinations('23'))
