/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = strs[0]
  for (let i = 1; i < strs.length; i++) {
    const ss = strs[i]
    if (ss.startsWith(res)) continue
    else {
      for (let j = res.length - 1; j >= 0; j--) {
        if (ss.startsWith(res.substring(0, j))) {
          res = res.substring(0, j)
          break
        }

        if (j === 0) res = ''
      }
    }
  }
  return res || ''
}

var longestCommonPrefix2 = function (strs) {
  let res = strs.sort((a, b) => a.length > b.length)[0]
  for (let i = 1; i < strs.length; i++) {
    const ss = strs[i]
    if (ss.startsWith(res)) continue
    else {
      for (let j = res.length - 1; j >= 0; j--) {
        if (ss.startsWith(res.substring(0, j))) {
          res = res.substring(0, j)
          break
        }

        if (j === 0) res = ''
      }
    }
  }
  return res || ''
}

console.log(longestCommonPrefix2(['flower', 'flow', 'flight']))
