let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
let arr2 = ['A', 'B', 'C', 'D']
let arr2temp = arr2.map(item => `${item}3`)
let arr3 = [...arr1, ...arr2temp].sort().map(item => {
  if (item.includes('3')) return item.split('')[0]
  return item
})
console.log('arr3', arr3)
