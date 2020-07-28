// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var maxArea = function (height) {
//   let length = height.length,
//     res = 0

//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       res = Math.max(res, (j - i) * Math.min(height[i], height[j]))
//     }
//   }
//   return res
// }

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let length = height.length,
    index = 0,
    lastIndex = length - 1,
    res = 0

  while (index != lastIndex) {
    let diffIndex = lastIndex - index,
      indexValue = height[index],
      lastIndexValue = height[lastIndex]
    res = Math.max(res, Math.min(indexValue, lastIndexValue) * diffIndex)
    if (indexValue > lastIndexValue) lastIndex--
    else index++
  }

  return res
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
