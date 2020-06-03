function reverse(num) {
  let res = 0
  while (num != 0) {
    res = res * 10 + (num % 10)
    num = (num / 10) >> 0
  }
  return res.toString()
}

console.log(reverse(-352340))

function reverse() {
  let res = 0
  return function reversed(num) {
    if (num !== 0) {
      res = res * 10 + (num % 10)
      reversed((num / 10) >> 0)
    }
    return res.toString()
  }
}

console.log(reverse()(-1264820))
