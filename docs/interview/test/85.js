Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    const len = promises.length
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(resolve, reject)
    }
  })
}
