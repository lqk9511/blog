// var a = {
//   i: 1,
//   toString() {
//     return a.i++
//   }
// }

// if (a == 1 && a == 2 && a == 3) {
//   console.log(1)
// }

// let a = {
//   i: 1,
//   valueOf() {
//     return a.i++
//   }
// }

// if (a == 1 && a == 2 && a == 3) {
//   console.log('1')
// }

// let a = [1, 2, 3]
// a.toString = a.shift
// if (a == 1 && a == 2 && a == 3) {
//   console.log(1)
// }

var value = 1

Object.defineProperty(global, 'a', {
  get: function() {
    return (this.value = this.value ? (this.value += 1) : 1)
  }
})

if (a == 1 && a == 2 && a == 3) {
  console.log(1)
}
