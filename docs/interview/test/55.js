let arr = [
  12,
  34,
  345,
  634,
  1,
  324,
  3543,
  5345,
  3,
  5,
  453,
  5,
  353,
  5,
  45,
  345,
  34,
  534,
  -12,
  23,
  213,
]

function bubble(target) {
  for (let x = 0; x < target.length; x++)
    for (let y = x + 1; y < target.length; y++)
      if (target[x] > target[y]) [target[x], target[y]] = [target[y], target[x]]

  return target
}

// console.log(bubble(arr))

function bubble2(target) {
  let x = 0
  while (x < target.length) {
    for (let y = x + 1; y < target.length; y++)
      if (target[x] > target[y]) [target[x], target[y]] = [target[y], target[x]]

    x++
  }

  return target
}

console.log(bubble2(arr))
