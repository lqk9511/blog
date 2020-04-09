let obj = { 1: 222, 2: 123, 5: 888 }

let arr = new Array(12)

for (let index = 0, y = index + 1; index < arr.length; index++, y++) {
  arr[index] = null
  if (obj[y]) arr[index] = obj[y]
}
console.log(arr)

console.log(
  Array.from({ length: 12 }).map((_, index) => obj[index + 1] || null)
)
