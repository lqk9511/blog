/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let m = s.length,
    n = p.length,
    dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(false))

  dp[0][0] = true

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
        } else {
          dp[i][j] = dp[i][j - 2]
        }
      }

      console.log(dp.slice(0, 1).toString())
      console.log(dp.slice(1, 2).toString())
      console.log(dp.slice(2, 3).toString())
      console.log('-------------------------------')
    }
  }

  console.log(dp)
  return dp[m][n]
}

console.log(isMatch('aa', '.*b*'))
