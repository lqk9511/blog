// Promise/A+ 约定了哪些规范？

// 1.  "promise"：是一个具有 then 方法的对象或者函数，它的行为符合该规范。
// 2.  "thenable"：是一个定义了 then 方法的对象或者函数。
// 3.  "value"：可以是任何一个合法的 JavaScript 的值（包括 undefined、thenable 或 promise）。
// 4.  "exception"：是一个异常，是在 Promise 里面可以用 throw 语句抛出来的值。
// 5.  "reason"：是一个 Promise 里 reject 之后返回的拒绝原因。

// Promise 状态的描述：

// 1.  一个 Promise 有三种状态：pending、fulfilled 和 rejected。
// 2.  当状态为 pending 状态时，即可以转换为 fulfilled 或者 rejected 其中之一。
// 3.  当状态为 fulfilled 状态时，就不能转换为其他状态了，必须返回一个不能再改变的值。
// 4.  当状态为 rejected 状态时，同样也不能转换为其他状态，必须有一个原因的值也不能改变。


// then 方法的描述：

// 一个 Promise 必须拥有一个 then 方法来访问它的值或者拒绝原因。
// then 方法有两个参数：   promise.then(onFulfilled, onRejected)
// onFulfilled 和 onRejected 都是可选参数。

// onFulfilled 和 onRejected 特性

// 如果 onFulfilled 是函数，则当 Promise 执行结束之后必须被调用，
// 最终返回值为 value，其调用次数不可超过一次。而 onRejected 除了最后
// 返回的是 reason 外，其他方面和 onFulfilled 在规范上的表述基本一样。


// 多次调用
// then 方法其实可以被一个 Promise 调用多次，且必须返回一个 Promise 对象。
// then 的写法如下所示，其中 Promise1 执行了 then 的方法之后，返回的依旧是个 
// Promise2，然后我们拿着 Promise2 又可以执行 then 方法，而 Promise2 是一个
// 新的 Promise 对象，又可以继续进行 then 方法调用。

// promise2 = promise1.then(onFulfilled, onRejected);

// 另外还有一个需要注意的是，在 Promise/A+ 规范中，onResolved 和 onRejected 这两项函数需要异步调用

try {
    module.exports = Promise
} catch (e) {}

// function Promise(executor) {
//     let self = this
//     self.status = 'pending' // Promise 当前状态
//     self.date = undefined   // Promise 最终值
//     self.onResolvedCallback = [] // Promise resolve 时的回调函数集
//     self.onRejectedCallback = [] // Promise reject 时的回调函数集

//     function resolve(value) {

//         if (value instanceof Promise) {
//             return value.then(resolve, reject)
//         }
//         setTimeout(() => { // 异步执行所有的回调函数
//             if(self.status === 'pending') {
//                 // 把 Promise 内部的 status 从 pending 变成对应的状态
//                 self.status = 'resolved'
//                 // 并把对应的 value 存在内部的 data 属性上面
//                 self.date = value
//                 // 之后执行相应的回调函数
//                 self.onResolvedCallback.forEach(fn => fn(value));
//             }
//         }, 0);
//     }

//     function reject(reason) {
//         setTimeout(() => { // 异步执行所有的回调函数
//             if(self.status === 'pending') {
//                 // 把 Promise 内部的 status 从 pending 变成对应的状态
//                 self.status = 'rejected'
//                 // 并把对应的 reason 存在内部的 data 属性上面
//                 self.date = reason
//                 // 之后执行相应的回调函数
//                 self.onResolvedCallback.forEach(fn => fn(reason));
//             }
//         }, 0);
//     }

//     try { // 考虑到执行过程中有可能出错，所以我们用try/catch块给包起
//         executor(resolve, reject) // 执行executor并传入相应的参数
//       } catch(e) {
//         reject(e)
//       }
// }

// function resolvePromise(promise2, x, resolve, reject) {
//     let then
//     let thenCalledOrThrow = false
//     if (promise2 === x) {
//       return reject(new TypeError('Chaining cycle detected for promise!'))
//     }
//     if (x instanceof Promise) {
//       if (x.status === 'pending') { 
//         x.then(function(v) {
//           resolvePromise(promise2, v, resolve, reject)
//         }, reject)
//       } else {
//         x.then(resolve, reject)
//       }
//       return
//     }
//     if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
//       try {
//         then = x.then
//         if (typeof then === 'function') {
//           then.call(x, function rs(y) {
//             if (thenCalledOrThrow) return
//             thenCalledOrThrow = true
//             return resolvePromise(promise2, y, resolve, reject)
//           }, function rj(r) {
//             if (thenCalledOrThrow) return
//             thenCalledOrThrow = true
//             return reject(r)
//           })
//         } else {
//           resolve(x)
//         }
//       } catch (e) {
//         if (thenCalledOrThrow) return
//         thenCalledOrThrow = true
//         return reject(e)
//       }
//     } else {
//       resolve(x)
//     }
//   }

// // then 方法是 Promise 执行完之后可以拿到 value 或者 reason 的方法，
// // 并且还要保持 then 执行之后，返回的依旧是一个 Promise 方法，还要支持多次调用。

// Promise.prototype.then = function(onResolved,onRejected) {
//     let self = this
//     let promise2
//     // 根据标准，如果then的参数不是function，则需要忽略它
//     onResolved = typeof onResolved === 'function' ? onResolved : function(v) { return v}
//     onRejected = typeof onRejected === 'function' ? onRejected : function(r) { throw r}

//     if(self.status === 'pending') {
//         // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onRejected，
//         // 只能等到Promise的状态确定后，才能确定如何处理
//         return promise2 = new Promise(function(resolve, reject) {
//             // 这里之所以没有异步执行，是因为这些函数必然会被resolve或reject调用，
//             // 而resolve或reject函数里的内容已是异步执行，构造函数里的定义
//             self.onResolvedCallback.push(function(value) {
//                 try {
//                   var x = onResolved(value)
//                 //   还要支持不同的 Promise 进行交互
//                   resolvePromise(promise2, x, resolve, reject)
//                 } catch (e) {
//                   reject(e)
//                 }
//               })
//             self.onRejectedCallback.push(function(reason) {
//                 try {
//                   var x = onRejected(reason)
//                 //   还要支持不同的 Promise 进行交互
//                   resolvePromise(promise2, x, resolve, reject)
//                 } catch (e) {
//                   reject(e)
//                 }
//               })
//         })
//     }

//     if(self.status === 'resolved') {
//         // 如果promise1的状态已经确定并且是resolved，我们调用onResolved，
//         // 考虑到有可能throw，所以还需要将其包在try/catch块里
//         return promise2 = new Promise(function(resolve, reject) {
//             setTimeout(() => { // 异步执行onResolved
//                 try {
//                     let x = onResolved(self.date)
//                     // 还要支持不同的 Promise 进行交互，
//                     resolvePromise(promise2, x, resolve, reject)
//                 } catch (error) {
//                     reject(error) // 如果出错，以捕获到的错误作为 promise2 的结果
//                 }
//             }, 0);
//         })
//     }

//     // 此处与前一个if块的逻辑几乎相同，区别在于所调用的是onRejected函数
//     if(self.status === 'rejected') {
//         return promise2 = new Promise(function(resolve, reject) {
//             setTimeout(() => { // 异步执行onRejected
//                 try {
//                     let x = onRejected(self.date)
//                     // 还要支持不同的 Promise 进行交互
//                     resolvePromise(promise2, x, resolve, reject)
//                 } catch (error) {
//                     reject(error)
//                 }
//             }, 0);
//         })
//     }
// }

// Promise.prototype.catch = function(onRejected) {
//     return this.then(null, onRejected)
// }


const isFunction = obj => typeof obj === 'function'
const isObject = obj => !!(obj && typeof obj === 'object')
const isThenable = obj => (isFunction(obj) || isObject(obj)) && 'then' in obj
const isPromise = promise => promise instanceof Promise

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(f) {
    this.result = null
    this.state = PENDING
    this.callbacks = []

    let onFulfilled = value => transition(this, FULFILLED, value)
    let onRejected = reason => transition(this, REJECTED, reason)

    let ignore = false

    let resolve = value => {
        if (ignore) return
        ignore = true
        resolvePromise(this, value, onFulfilled, onRejected)
    }

    let reject = reason => {
        if (ignore) return
        ignore = true
        onRejected(reason)
    }

    try {
        f(resolve, reject)
    } catch (error) {
        reject(error)
    }

}

Promise.prototype.then = function(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {
      let callback = { onFulfilled, onRejected, resolve, reject }
  
      if (this.state === PENDING) {
        this.callbacks.push(callback)
      } else {
        setTimeout(() => handleCallback(callback, this.state, this.result), 0)
      }
    })
}

const handleCallback = (callback, state, result) => {
    let { onFulfilled, onRejected, resolve, reject } = callback
    try {
        if (state === FULFILLED) {
            isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result)
        } else if (state === REJECTED) {
            isFunction(onRejected) ? resolve(onRejected(result)) : reject(result)
        }
    } catch (error) {
        reject(error)
    }
}

const handleCallbacks = (callbacks, state, result) => {
    while (callbacks.length) handleCallback(callbacks.shift(), state, result)
}

const resolvePromise = (promise, result, resolve, reject) => {
    if (result === promise) {
      let reason = new TypeError('Can not fufill promise with itself')
      return reject(reason)
    }
  
    if (isPromise(result)) {
      return result.then(resolve, reject)
    }
  
    if (isThenable(result)) {
      try {
        let then = result.then
        if (isFunction(then)) {
          return new Promise(then.bind(result)).then(resolve, reject)
        }
      } catch (error) {
        return reject(error)
      }
    }
  
    resolve(result)
}


const transition = (promise, state, result) => {
    if (promise.state !== PENDING) return
    promise.state = state
    promise.result = result
    setTimeout(() => handleCallbacks(promise.callbacks, state, result), 0)
  }
  


// 最后这个是测试用的
Promise.deferred = Promise.defer = function() {
    var dfd = {}
    dfd.promise = new Promise(function(resolve, reject) {
      dfd.resolve = resolve
      dfd.reject = reject
    })
    return dfd
}
