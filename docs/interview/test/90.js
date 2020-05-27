/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length,
    len2 = nums2.length
  let k1 = Math.floor((len1 + len2 + 1) / 2),
    k2 = Math.floor((len1 + len2 + 2) / 2)

  return (
    (findMedianCore(nums1, 0, nums2, 0, k1) +
      findMedianCore(nums1, 0, nums2, 0, k2)) *
    0.5
  )
}

/**
 *
 * @param {number[]} nums1
 * @param {number} start1
 * @param {number[]} nums2
 * @param {number} start2
 * @param {number} k
 * @returns {number}
 */
function findMedianCore(nums1, start1, nums2, start2, k) {
  if (start1 > nums1.length - 1) {
    return nums2[start2 + k - 1]
  }

  if (start2 > nums2.length - 1) {
    return nums1[start1 + k - 1]
  }

  if (k === 1) {
    return Math.min(nums1[start1], nums2[start2])
  }

  // 找到k/2

  // 比较两数组下一个index值
  // 防止数组越界
  let k2 = Math.min(
    Math.floor(k / 2),
    nums1.length - start1,
    nums2.length - start2
  )

  const val1 = nums1[start1 + k2 - 1]
  const val2 = nums2[start2 + k2 - 1]

  if (val1 > val2) {
    return findMedianCore(nums1, start1, nums2, start2 + k2, k - k2)
  } else {
    return findMedianCore(nums1, start1 + k2, nums2, start2, k - k2)
  }
}

console.log('findMedianSortedArrays', findMedianSortedArrays([1, 2], [3, 4]))
