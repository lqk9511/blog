let arr1 = ''

for (let i = 0; i < 3; i++) {
  arr1 += Math.floor(Math.random() * 10)
}

let arr2 = ''

for (let i = 0; i < 20; i++) {
  arr2 += Math.floor(Math.random() * 10)
}

function find(arr1, arr2) {
  let res = -1,
    i = 0
  if (arr1.length > arr2.length) return -1
  while (i < arr2.length - arr1.length) {
    if (arr2.substr(i, arr1.length) === arr1) return i
    i++
  }

  return res
}

console.log(arr1)
console.log(arr2)

console.log(find(arr1, arr2))
