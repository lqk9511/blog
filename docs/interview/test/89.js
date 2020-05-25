function inherit(sub, Super) {
  sub.prototype = Object.create(Super.prototype, {
    constructor: {
      value: Sub,
      enumerable: false, //不能枚举
      writable: true,
      configurable: true,
    },
  })
}

function Super(name) {
  this.name = name
}

Super.prototype.play = function () {
  console.log(`I like play games`)
}

function Sub(name, age) {
  Super.call(this, name)
  this.age = age
}
inherit(Sub, Super)

let child = new Sub('jeff', 18)

Sub.prototype.say = function () {
  console.log(`I am ${this.name}, ${this.age} years`)
}

Sub.prototype.work = function () {
  console.log(`I like Coding`)
}

// child.play()
child.say()

let child2 = new Sub('rose', 16)
// child2.work()
