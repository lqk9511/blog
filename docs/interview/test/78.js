Promise.all = function (promises) {
  // 只考虑传入的 promises 为数组的情况
  return new Promise((resolve, reject) => {
    const length = promises.length
    let result = []
    if (!length) return resolve(result)
    for (let index = 0; index < length; index++) {
      const item = promises[index]
      // 这里考虑 item 不是 Promise 对象
      Promise.resolve(item).then(
        (res) => {
          result[index] = res
          // 所有的 promises 状态都是 fulfilled，promise.all返回的实例才变成 fulfilled 状态
          if (result.length === length) resolve(result)
        },
        (err) => {
          reject(err)
          return
        }
      )
    }
  })
}

const p1 = new Promise((resolve, reject) => {
  throw new Error('报错了')
  // resolve('hello')
})
  .then((result) => result)
  .catch((e) => e)

const p2 = new Promise((resolve, reject) => {
  // throw new Error('报错了')
  resolve('world')
})
  .then((result) => result)
  .catch((e) => e)

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((e) => console.log(e))
