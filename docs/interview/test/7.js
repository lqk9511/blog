function AnimalEs5(name) {
  this.name = name;
}

AnimalEs5.prototype.getName = function() {
  return this.name;
};

Object.keys(AnimalEs5.prototype); // [ 'getName' ]
Object.getOwnPropertyNames(AnimalEs5.prototype); // [ 'constructor', 'getName' ]

class AnimalEs6 {
  constructor(name) {
    this.name = name;
    // AnimalEs6 = "AnimalEs6Change"; // TypeError: Assignment to constant variable.
    // asd = "dad"; // ReferenceError: asd is not defined 严格模式
  }

  static getType() {
    return "AnimalEs6";
  }

  getName() {
    return this.name;
  }
}

// 定义的所有方法（包括静态方法和实例方法）都是不可枚举的
Object.keys(AnimalEs6.prototype); // []
Object.getOwnPropertyNames(AnimalEs6.prototype); // [ 'constructor', 'getName' ]

AnimalEs5(); // It's ok

// AnimalEs6(); // Class constructor AnimalEs6 cannot be invoked without 'new'

// 严格模式
function Bar() {
  baz = 42; // it's ok
}
const bar = new Bar();

// new Foo(); // ReferenceError: Foo is not defined

class Foo {
  constructor() {
    // fol = 42; // ReferenceError: fol is not defined
  }
}
const foo = new Foo();

// `class` 内声明的所有的方法（包括静态方法和实例方法）都没有原型对象 prototype 所以也没有 [[construct]],不能用 `new` 来调用

const dog = new AnimalEs5();
const dogName = new dog.getName(); // it's ok

const es6Dog = new AnimalEs6();
// const es6DogName = new es6Dog.getName(); // TypeError: es6Dog.getName is not a constructor
