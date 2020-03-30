// Promise
const sleep = timestamp =>
  new Promise(resolve => setTimeout(resolve, timestamp))

sleep(1000).then(() => {
  console.log('我已经等了1000毫秒了')
})

// async

async function stepAsync() {
  await sleep(1000)
  console.log('我已经等了1000毫秒了')
}

stepAsync()

// Generator

function* stepGenerator(timestamp) {
  yield new Promise(resolve => setTimeout(resolve, timestamp))
}

stepGenerator(1000)
  .next()
  .value.then(() => console.log('我已经等了1000毫秒了'))

// es5

function stepES5(timestamp, fn) {
  setTimeout(fn, timestamp)
}

stepES5(1000, function() {
  console.log('我已经等了1000毫秒了')
})
