let test1 = { a: 12 }

// Object.defineProperty(test1, 'test', {
//   set: function(val) {
//     this.test = val
//   },
//   get: function() {
//     return this.test
//   },
//   configurable: true,
//   enumerable: true
// })

Object.defineProperty(test1, 'b', {
  get: function() {
    return test1.a
  },
  set: function(newValue) {
    test1.a = newValue
  },
  enumerable: true,
  configurable: true
})

test1.b = 1

console.log(test1.b)
