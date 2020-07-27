/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let length = height.length,
    res = 0

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      res = Math.max(res, (j - i) * Math.min(height[i], height[j]))
    }
  }
  return res
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
