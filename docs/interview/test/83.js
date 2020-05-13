/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let _map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const _temp = nums[i] - target
    if (_map.has(_temp)) return [_map.get(_temp), i]
    _map.set(_temp, i)
  }
}
