// var longestPalindrome = function (s) {
//   let length = s.length,
//     res = '',
//     dp = Array.from(new Array(length), () => new Array(length).fill(0))

//   for (let i = 0; i < length; i++) {
//     for (let j = i; j >= 0; j--) {
//       dp[i][j] = s[i] == s[j] && (i - j < 2 || dp[i - 1][j + 1])
//       if (dp[i][j] && i - j + 1 > res.length) {
//         res = s.substring(j, i + 1)
//       }
//     }
//   }
//   return res
// }

// console.log(longestPalindrome('civilwartestingwhe'))

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0
  const max = 0x7fffffff,
    min = -0x80000000

  while (x != 0) {
    res = res * 10 + (x % 10)
    x = parseInt(x / 10)
    if (res > max - 1 || res < min) return 0
  }
  return res
}

console.log(reverse(123))
