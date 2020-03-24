let testArr = [1, [2, 3], [43, 5], [1, [3, [12, 123]]]]

const flatten = function(target) {
  while (target.some(item => Array.isArray(item))) {
    target = [].concat(...target)
  }

  return target
}

console.log(flatten(testArr))

const flatten2 = target =>
  target.reduce(
    (acc, cur) =>
      Array.isArray(acc) ? [...acc, ...flatten2(cur)] : [...acc, cur],
    []
  )

console.log(flatten2(testArr))
