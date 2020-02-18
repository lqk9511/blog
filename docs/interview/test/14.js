// 首先我们要知道 new 到底做了什么事情

// 我们来举一个例子

function Animal(name) {
  this.name = name
  this.type = 'Animal'
}
Animal.prototype.ability = 'eat'

Animal.prototype.say = function() {
  console.log(`我属于 -> ${this.type} 类型,但是我的名字是 -> ${this.name}`)
}

// 声明一个狗狗
const dog = new Animal('dog')

console.log(dog.name) // dog
console.log(dog.type) // Animal
console.log(dog.ability) // eat
dog.say() // 我属于 -> Animal 类型,但是我的名字是 -> dog
// 我们可以访问 Animal 构造函数的属性
// 我们能够使用 Animal.prototype 中的方法及属性

// 那么我们可以
function _new(fn, ...arg) {
  // 我们使用构造函数 fn.prototype 创建一个对象
  // 使创建的 obj.__proto__ = fn.prototype
  // 这里不管是以什么样形式创建新的对象
  // 其目的都是为了让新创建对象的原型等于构造函数的原型
  const obj = Object.create(fn.prototype)
  console.log('TCL: function_new -> fn.prototype', fn.prototype)
  // 修改构造函数 this 指向
  const ret = fn.apply(obj, arg)
  // 确保返回值一直是一个对象
  return ret instanceof Object ? ret : obj
}

const pag = _new(Animal, 'pag')

console.log(pag.name) // dog
console.log(pag.type) // Animal
console.log(pag.ability) // eat
pag.say() // 我属于 -> Animal 类型,但是我的名字是 -> pag
