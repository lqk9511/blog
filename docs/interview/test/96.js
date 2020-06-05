const list = [1, 2, 3]
const square = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

// function test() {
//   list.forEach(async x=> {
//     const res = await square(x)
//     console.log(res)
//   })
// }

// async function test() {
//   for (let i = 0; i < list.length; i++) {
//     const element = list[i]
//     const res = await square(element)
//     console.log(res)
//   }
// }

async function test() {
  if (list.length) {
    const res = await square(list.shift())
    console.log(res)
    test()
  }
}

// function test() {
//   let promise = Promise.resolve()
//   list.forEach(async (x) => {
//     promise = promise.then(() => square(x).then((_) => console.log(_)))
//   })
// }

test()
