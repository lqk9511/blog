// let nums1 = [1, 2, 2, 1]
// let nums2 = [2, 2]

let nums1 = [1, 1, 4]
let nums2 = [1, 1, 2]
// [2, 2]

function intersect(arr1, arr2) {
  let _map = new Map()
  arr1.forEach((item) => {
    _v = _map.get(item)
    if (_v) _map.set(item, _v + 1)
    else _map.set(item, 1)
  })

  return arr2
    .map((item) => {
      _v = _map.get(item)
      if (_v) {
        _map.set(item, _v - 1)
        return item
      }
    })
    .filter((_) => _)
}

// console.log(intersect(nums1, nums2))

function intersect2(arr1, arr2) {
  return arr2
    .map((item) => {
      const _index = arr1.indexOf(item)
      if (_index !== -1) {
        arr1.splice(_index, 1)
        return item
      }
    })
    .filter((_) => _)
}

console.log(intersect2(nums1, nums2))
