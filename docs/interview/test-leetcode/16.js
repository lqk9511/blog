/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  const length = nums.length
  let res = 100000

  for (let first = 0; first < length; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) continue

    let second = first + 1,
      third = length - 1

    while (second < third) {
      const sum = nums[first] + nums[second] + nums[third]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
      if (sum > target) {
        third--
        while (second < third && nums[third] === nums[third + 1]) third--
      } else {
        second++
        while (second < third && nums[second] === nums[second - 1]) second++
      }
    }
  }

  return res
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
