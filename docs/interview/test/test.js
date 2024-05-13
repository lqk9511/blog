
// function print(n) {
//   ;(function (i) {
//     setTimeout(
//       () => {
//         console.log(i)
//       },
//       1,
//       Math.floor(Math.random() * 1000)
//     )
//   })(n)
// }
// for (var i = 0; i < 100; i++) {
//   print(i)
// }


function print(n) {
  setTimeout(
    ((i) => {
      console.log(i)
      return () => {}
    })(n),
    Math.floor(Math.random() * 1000)
  )
}

function fn(args) {
  return function spawn(gen) {
    return new Promise((resolve,reject)=> {
      const genFn = gen()
      function step(nextFn) {
        let next;
        try {
          next = nextFn()
        } catch (error) {
          return reject(error)
        }

        if(next.done) {
          return resolve(next.value)
        }

        Promise.resolve(next.value).then(function (v) {
          step(function () {return genFn.next(v)})
        },function (e) {
          step(function () {return genFn.throw(e)})
        })
        
      }

      step(function() {return genFn.next(undefined)})
    })
  }
}


function A() {
  this.b = 2

  var xx = 1
}


A.prototype.a = 1

let  a = new A()



console.log(a.__proto__.constructor === A)

console.log(a.__proto__ === A.prototype)

for (const key in A) {
  if (Object.hasOwnProperty.call(A, key)) {
    console.log(key)
  }
}


function extend(target,obj) {

  let res = Object.create(target.prototype)

  let res2 = obj.apply(res)


}


function myInstanceof(left,right) {
  // 判断是不是基础类型
  if(typeof left !== Object || left === null) return false 

  // 获取原型比对

  let obj = Object.getPrototypeOf(left)

  while(true) {
    if(obj === null) return false
    if(obj === right.prototype) return true

    obj = Object.getPrototypeOf(obj)
  }
}

let aa = {}
let bb = {a:{b:10}}
Object.assign(aa,bb)

console.log(aa)

bb.a.b = 100
console.log(aa)
console.log(bb)


function shallowClone(target) {
  if(target ===null || typeof target !== Object) return target
  let res = Array.isArray(target) ? [] :{}
  for (const key in target) {
    if(target.hasOwnProperty(key)) {
      res[key] = target[key]
    }
  }
  return res
}

const isObject = (target) => target!==null && (typeof target === 'object' || typeof target === 'function')

function deepClone(target,hash = new WeakMap()) {
  // 判断是不是时间
  if(target.constructor === Date) return new Date(target)
  // 判断正则
  if(target.constructor === RegExp) return new RegExp(target)

  // 判断环引用
  if(hash.has(target)) return hash.get(target)

  // 获取目标属性描述

  let cloneDesc = object.getOwnPropertyDescriptors(target)

  // 创建克隆对象

  let cloneObj = Object.create(Object.getPrototypeOf(target),cloneDesc)

  // 遍历目标

  for (const key of Reflect.ownKeys(target)) {
    cloneObj[key] = isObject(target[key]) && typeof target[key] !== 'function' ? deepClone(target[key]) : target[key]
  }

  return  cloneObj
}


function call(ctx,...args) {
  let context = ctx || window

  context.fn = this 

  let res = context.fn(...args)

  delete context.fn

  return res
}


function O (age) {
  this.age = age;
}
let o = new O(1);
let age = 3;
O.prototype.age = 2;
setTimeout(function () {
      age = 4;
      O(5);
      console.log(o.age)
      // 打印值
      // console.log(o.age, age, window.age)
}, 1000)



// const promise = new Promise((resolve, reject) => {
//   reject(1)
// }).catch(() => {
//   console.log(2)
// }).then(() => console.log(3), (v) => console.log(v))

// promise.then(console.log)


class CodingMan {
  constructor(name) {
    this.name = name
    console.log(this.name)
    this.tasks = []
    setTimeout(() => {
      this.next()
    }, 0);
  }

  eat(food) {
    let fn = ((f) => ()=> {
      console.log(`I am eat ${f}`)
      this.next()
    })(food)

    this.tasks.push(fn)
    return this
  }

  sleep(time) {
    var fn = ((t) => () =>
      setTimeout(() => {
        console.log(`等待了${time}秒...`)
        this.next()
      }, t * 1000))(time)

    this.tasks.push(fn)
    return this
  }

  next() {
    let fn = this.tasks.shift()

    fn && fn()
  }
}

let test1 = new CodingMan('jeff')

// test1.sleep(10).eat('lal')




function clone (parent, child) {
  // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function Parent6() {
  this.name = 'parent6';
  this.play = [1, 2, 3];
}
 Parent6.prototype.getName = function () {
  return this.name;
}
function Child6() {
  Parent6.call(this);
  this.friends = 'child5';
}

clone(Parent6, Child6);

Child6.prototype.getFriends = function () {
  return this.friends;
}


for (let index = 0; index < 9; index++) {
  console.log(index)
  for (let x = 0; x < 5; x++) {
    if(x>2) return;
    console.log(x);
  }
}
