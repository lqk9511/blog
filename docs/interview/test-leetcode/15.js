/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = new Map()

  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue
      const differenceIndex = nums.findIndex((e) => e === -(nums[i] + nums[j]))
      if (![-1, i, j].includes(differenceIndex)) {
        const _keys = [nums[i], nums[j], nums[differenceIndex]]
          .sort((a, b) => a - b)
          .toString()
        if (!res.has(_keys)) {
          res.set(
            _keys,
            [nums[i], nums[j], nums[differenceIndex]].sort((a, b) => a - b)
          )
        }
      }
    }
  }
  return [...res.values()]
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum2 = function (nums) {
  let length = nums.length,
    res = []
  nums = nums.sort((a, b) => a - b)

  for (let first = 0; first < length; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) continue

    let third = length - 1,
      target = -nums[first]

    for (let second = first + 1; second < length; second++) {
      if (second > first + 1 && nums[second] == nums[second - 1]) continue

      while (second < third && nums[second] + nums[third] > target) third--

      if (second === third) break

      if (nums[second] + nums[third] == target) {
        res.push([nums[first], nums[second], nums[third]])
      }
    }
  }
  return res
}

console.log(threeSum2([-1, 0, 1, 2, -1, -4]))
